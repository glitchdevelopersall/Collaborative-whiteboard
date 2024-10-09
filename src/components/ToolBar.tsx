import React from 'react';
import { Pen, Eraser, Edit3, Type, Palette } from 'lucide-react';

type Tool = 'pen' | 'eraser' | 'marker' | 'text';

interface ToolBarProps {
  activeTool: Tool;
  setTool: (tool: Tool) => void;
  color: string;
  setColor: (color: string) => void;
  strokeWidth: number;
  setStrokeWidth: (width: number) => void;
}

const ToolBar: React.FC<ToolBarProps> = ({ 
  activeTool, 
  setTool, 
  color, 
  setColor, 
  strokeWidth, 
  setStrokeWidth 
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 m-4 flex items-center space-x-4">
      <ToolButton icon={<Pen />} tool="pen" activeTool={activeTool} setTool={setTool} />
      <ToolButton icon={<Eraser />} tool="eraser" activeTool={activeTool} setTool={setTool} />
      <ToolButton icon={<Edit3 />} tool="marker" activeTool={activeTool} setTool={setTool} />
      <ToolButton icon={<Type />} tool="text" activeTool={activeTool} setTool={setTool} />
      <div className="relative">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="opacity-0 absolute inset-0 w-full h-full cursor-pointer"
        />
        <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden">
          <Palette size={20} style={{ color: color }} />
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">Size:</span>
        <input
          type="range"
          min="1"
          max="50"
          value={strokeWidth}
          onChange={(e) => setStrokeWidth(Number(e.target.value))}
          className="w-24"
        />
        <span className="text-sm font-medium text-gray-700">{strokeWidth}px</span>
      </div>
    </div>
  );
};

interface ToolButtonProps {
  icon: React.ReactNode;
  tool: Tool;
  activeTool: Tool;
  setTool: (tool: Tool) => void;
}

const ToolButton: React.FC<ToolButtonProps> = ({ icon, tool, activeTool, setTool }) => (
  <button
    className={`p-2 rounded-lg transition-colors duration-200 ${
      activeTool === tool ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
    }`}
    onClick={() => setTool(tool)}
  >
    {icon}
  </button>
);

export default ToolBar;