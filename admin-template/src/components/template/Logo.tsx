export default function Logo() {
    return (
        <div className="flex flex-col items-center justify-center bg-white h-10 w-10 rounded-full">
            <div className="h-3 w-3 rounded-full bg-red-500 mb-0.5"></div>
            <div className="flex">
                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-0.5"></div>
                <div className="h-3 w-3 rounded-full bg-green-600 ml-0.5"></div>
            </div>
        </div>
    )
}