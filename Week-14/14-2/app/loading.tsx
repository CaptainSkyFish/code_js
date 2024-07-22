import { Spinner } from "@/components/Loader";

export default function Loading() {
    return <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <Spinner/>
            </div>
        </div>
}