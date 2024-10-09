import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Stage, Layer, Line, Text, Transformer, Group, Rect } from 'react-konva';
import ToolBar from '../components/ToolBar';
import Konva from 'konva';

type Tool = 'pen' | 'eraser' | 'marker' | 'text';

interface Element {
  tool: Tool;
  points?: number[];
  color: string;
  strokeWidth: number;
  id?: string;
  text?: string;
  x?: number;
  y?: number;
  fontSize?: number;
  width?: number;
  height?: number;
}

const Whiteboard: React.FC = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [tool, setTool] = useState<Tool>('pen');
  const [color, setColor] = useState<string>('#000000');
  const [strokeWidth, setStrokeWidth] = useState<number>(5);
  const [isDrawing, setIsDrawing] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const stageRef = useRef<Konva.Stage>(null);
  const transformerRef = useRef<Konva.Transformer>(null);

  useEffect(() => {
    if (selectedId) {
      const node = stageRef.current?.findOne(`#${selectedId}`);
      if (node && transformerRef.current) {
        transformerRef.current.nodes([node]);
        transformerRef.current.getLayer()?.batchDraw();
      }
    } else {
      transformerRef.current?.nodes([]);
      transformerRef.current?.getLayer()?.batchDraw();
    }
  }, [selectedId]);

  const handleMouseDown = useCallback(
    (e: Konva.KonvaEventObject<MouseEvent | TouchEvent>) => {
      setIsDrawing(true);
      const pos = e.target.getStage()?.getPointerPosition();
      if (pos) {
        if (tool === 'text') {
          const id = `text-${Date.now()}`;
          setElements((prevElements) => [
            ...prevElements,
            {
              tool,
              id,
              x: pos.x,
              y: pos.y,
              text: 'Double click to edit',
              fontSize: strokeWidth * 2,
              color,
              width: 200,
              height: 50,
            },
          ]);
          setSelectedId(id);
        } else {
          setElements((prevElements) => [
            ...prevElements,
            {
              tool,
              points: [pos.x, pos.y],
              color: tool === 'eraser' ? '#ffffff' : color,
              strokeWidth,
            },
          ]);
        }
      }
    },
    [tool, color, strokeWidth]
  );

  const handleMouseMove = useCallback(
    (e: Konva.KonvaEventObject<MouseEvent | TouchEvent>) => {
      if (!isDrawing) return;

      const pos = e.target.getStage()?.getPointerPosition();
      if (pos && tool !== 'text') {
        setElements((prevElements) => {
          const lastElement = prevElements[prevElements.length - 1];
          const newPoints = lastElement.points ? [...lastElement.points, pos.x, pos.y] : [pos.x, pos.y];
          const updatedElement = { ...lastElement, points: newPoints };
          return [...prevElements.slice(0, -1), updatedElement];
        });
      }
    },
    [isDrawing, tool]
  );

  const handleMouseUp = useCallback(() => {
    setIsDrawing(false);
  }, []);

  const handleTextDblClick = (textNode: Konva.Text, elem: Element) => {
    const textPosition = textNode.getAbsolutePosition();
    const stageContainer = stageRef.current?.container();

    if (stageContainer) {
      const textarea = document.createElement('textarea');
      document.body.appendChild(textarea);

      textarea.value = elem.text || '';
      textarea.style.position = 'absolute';
      textarea.style.top = `${textPosition.y}px`;
      textarea.style.left = `${textPosition.x}px`;
      textarea.style.width = `${elem.width}px`;
      textarea.style.height = `${elem.height}px`;
      textarea.style.fontSize = `${elem.fontSize}px`;
      textarea.style.border = 'none';
      textarea.style.padding = '0px';
      textarea.style.margin = '0px';
      textarea.style.overflow = 'hidden';
      textarea.style.background = 'none';
      textarea.style.outline = 'none';
      textarea.style.resize = 'none';
      textarea.style.lineHeight = elem.fontSize + 'px';
      textarea.style.fontFamily = 'sans-serif';
      textarea.style.transformOrigin = 'left top';
      textarea.style.textAlign = 'left';
      textarea.style.color = elem.color;

      textarea.focus();

      textarea.addEventListener('blur', () => {
        const newText = textarea.value;
        setElements((prevElements) =>
          prevElements.map((el) => (el.id === elem.id ? { ...el, text: newText } : el))
        );
        document.body.removeChild(textarea);
      });
    }
  };

  const handleTextTransform = (stage: Konva.Stage | null, elem: Element) => {
    const textNode = stage?.findOne(`#${elem.id}`) as Konva.Text;
    if (textNode) {
      const newWidth = textNode.width() * textNode.scaleX();
      const newHeight = textNode.height() * textNode.scaleY();
      setElements((prevElements) =>
        prevElements.map((el) =>
          el.id === elem.id
            ? {
                ...el,
                x: textNode.x(),
                y: textNode.y(),
                width: newWidth,
                height: newHeight,
                fontSize: el.fontSize ? el.fontSize * textNode.scaleY() : undefined,
              }
            : el
        )
      );
      textNode.setAttrs({
        width: newWidth,
        height: newHeight,
        scaleX: 1,
        scaleY: 1,
      });
    }
  };

  const handleRemoveText = (id: string) => {
    setElements((prevElements) => prevElements.filter((el) => el.id !== id));
    setSelectedId(null);
  };

  const handleDragEnd = (e: Konva.KonvaEventObject<DragEvent>, id: string) => {
    setElements((prevElements) =>
      prevElements.map((el) =>
        el.id === id ? { ...el, x: e.target.x(), y: e.target.y() } : el
      )
    );
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <ToolBar
        activeTool={tool}
        setTool={setTool}
        color={color}
        setColor={setColor}
        strokeWidth={strokeWidth}
        setStrokeWidth={setStrokeWidth}
      />
      <div className="flex-grow relative">
        <Stage
          width={window.innerWidth}
          height={window.innerHeight - 100}
          onMouseDown={handleMouseDown}
          onMousemove={handleMouseMove}
          onMouseup={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
          className="bg-white shadow-lg rounded-lg m-4"
          ref={stageRef}
        >
          <Layer>
            {elements.map((elem, i) => {
              if ('points' in elem) {
                return (
                  <Line
                    key={i}
                    points={elem.points}
                    stroke={elem.color}
                    strokeWidth={elem.strokeWidth}
                    tension={0.5}
                    lineCap="round"
                    lineJoin="round"
                    globalCompositeOperation={
                      elem.tool === 'eraser' ? 'destination-out' : 'source-over'
                    }
                  />
                );
              } else {
                return (
                  <Group
                    key={elem.id}
                    draggable
                    onDragEnd={(e) => handleDragEnd(e, elem.id!)}
                  >
                    <Text
                      id={elem.id}
                      text={elem.text}
                      x={elem.x}
                      y={elem.y}
                      fontSize={elem.fontSize}
                      fill={elem.color}
                      width={elem.width}
                      height={elem.height}
                      onTransform={() => handleTextTransform(stageRef.current, elem)}
                      onDblClick={(e) => handleTextDblClick(e.target as Konva.Text, elem)}
                      onClick={() => setSelectedId(elem.id!)}
                    />
                    {selectedId === elem.id && (
                      <Group>
                        <Rect
                          x={elem.x! + elem.width!}
                          y={elem.y!}
                          width={20}
                          height={20}
                          fill="red"
                          onClick={() => handleRemoveText(elem.id!)}
                        />
                      </Group>
                    )}
                  </Group>
                );
              }
            })}
            <Transformer
              ref={transformerRef}
              boundBoxFunc={(oldBox, newBox) => {
                newBox.width = Math.max(30, newBox.width);
                return newBox;
              }}
            />
          </Layer>
        </Stage>
      </div>
    </div>
  );
};

export default Whiteboard;