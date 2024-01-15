import { Button } from "../../button";

export default function Task(Task: { id: number, title: string, description: string, status: string }) {
    return (
        <div id={Task.id.toString()} className="flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4  border-l-transparent">
            <div className="inline-flex items-center space-x-2">
                <h1 className="text-2xl font-bold">{Task.title}</h1>
                <p className="text-lg">{Task.description}</p>
                <Button>
                    ✅
                </Button>
                
                <Button>
                    Edit 🌙
                </Button>
                <Button>
                    🗑 
                </Button>
            </div>
        </div>
    )
}