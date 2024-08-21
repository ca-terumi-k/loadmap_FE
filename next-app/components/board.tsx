"use client";
import React, { useState } from "react";
import {
    DndContext,
    DragEndEvent,
    DragStartEvent,
    useDraggable,
    useDroppable,
    DragOverlay,
} from "@dnd-kit/core";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Draggable: React.FC<{
    children: React.ReactNode;
    id: string;
    onMoveLeft: () => void;
    onMoveRight: () => void;
}> = ({ children, id, onMoveLeft, onMoveRight }) => {
    const { attributes, listeners, setNodeRef, transform, isDragging } =
        useDraggable({
            id: id,
        });
    const style = transform
        ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
              zIndex: isDragging ? 1000 : "auto",
          }
        : undefined;

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            className={`bg-blue-500 text-white p-2 mb-2 rounded ${
                isDragging ? "opacity-50" : ""
            }`}
        >
            <div className="flex items-center justify-between">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        onMoveLeft();
                    }}
                    className="p-1 bg-blue-600 rounded"
                >
                    <ChevronLeft size={16} />
                </button>
                <div
                    {...listeners}
                    className="flex-grow text-center cursor-move"
                >
                    {children}
                </div>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        onMoveRight();
                    }}
                    className="p-1 bg-blue-600 rounded"
                >
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
};

const Droppable: React.FC<{ children: React.ReactNode; id: string }> = ({
    children,
    id,
}) => {
    const { isOver, setNodeRef } = useDroppable({
        id: id,
    });

    return (
        <div
            ref={setNodeRef}
            className={`w-56 h-80 p-2 rounded flex flex-col ${
                isOver ? "bg-gray-300" : "bg-gray-200"
            }`}
        >
            {children}
        </div>
    );
};

const DragAndDropApp: React.FC = () => {
    const [itemPositions, setItemPositions] = useState<{
        [key: string]: string;
    }>({
        item1: "column1",
        item2: "column2",
        item3: "column3",
    });
    const [activeId, setActiveId] = useState<string | null>(null);

    const handleDragStart = (event: DragStartEvent) => {
        setActiveId(event.active.id.toString());
    };

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveId(null);
        if (over && active.id !== over.id) {
            setItemPositions((prev) => ({
                ...prev,
                [active.id.toString()]: over.id.toString(),
            }));
        }
    };

    const columns = ["column1", "column2", "column3", "column4"];

    const getItemCount = (columnId: string) => {
        return Object.values(itemPositions).filter((pos) => pos === columnId)
            .length;
    };

    const moveItem = (itemId: string, direction: "left" | "right") => {
        const currentColumnIndex = columns.indexOf(itemPositions[itemId]);
        let newColumnIndex;

        if (direction === "left" && currentColumnIndex > 0) {
            newColumnIndex = currentColumnIndex - 1;
        } else if (
            direction === "right" &&
            currentColumnIndex < columns.length - 1
        ) {
            newColumnIndex = currentColumnIndex + 1;
        } else {
            return; // Can't move further left/right
        }

        setItemPositions((prev) => ({
            ...prev,
            [itemId]: columns[newColumnIndex],
        }));
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-5xl p-6 bg-white rounded-xl shadow-md">
                <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
                    Drag and Drop Demo with Button Navigation
                </h1>
                <DndContext
                    onDragEnd={handleDragEnd}
                    onDragStart={handleDragStart}
                >
                    <div className="flex justify-between">
                        {columns.map((columnId) => (
                            <Droppable key={columnId} id={columnId}>
                                <p className="text-gray-700 mb-2 font-semibold">{`Stage ${columnId.slice(
                                    -1
                                )}`}</p>
                                <div className="flex-grow bg-white rounded p-2 mb-2 overflow-y-auto">
                                    {Object.entries(itemPositions).map(
                                        ([itemId, position]) =>
                                            position === columnId ? (
                                                <Draggable
                                                    key={itemId}
                                                    id={itemId}
                                                    onMoveLeft={() =>
                                                        moveItem(itemId, "left")
                                                    }
                                                    onMoveRight={() =>
                                                        moveItem(
                                                            itemId,
                                                            "right"
                                                        )
                                                    }
                                                >
                                                    {`Item ${itemId.slice(-1)}`}
                                                </Draggable>
                                            ) : null
                                    )}
                                </div>
                                <p className="text-sm text-gray-600 text-center">
                                    Items: {getItemCount(columnId)}
                                </p>
                            </Droppable>
                        ))}
                    </div>
                    <DragOverlay>
                        {activeId ? (
                            <div className="bg-blue-600 text-white p-2 rounded shadow-lg">
                                {`Item ${activeId.slice(-1)}`}
                            </div>
                        ) : null}
                    </DragOverlay>
                </DndContext>
            </div>
        </div>
    );
};

export default DragAndDropApp;
