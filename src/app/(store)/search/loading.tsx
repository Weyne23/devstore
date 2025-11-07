import { Skeleton } from "@/components/skeleton"
import { Suspense } from "react"
import ResultForSkeleton from "./results-for-skeleton"

export default function SearchLoading() {
    
    return (
        <div className="flex flex-col gap-4">
            <Suspense>
                <ResultForSkeleton />
            </Suspense>
            <div className="grid grid-cols-3 gap-6">
                <Skeleton className="h-[380px]"/>
                <Skeleton className="h-[380px]"/>
                <Skeleton className="h-[380px]"/>
                <Skeleton className="h-[380px]"/>
                <Skeleton className="h-[380px]"/>
                <Skeleton className="h-[380px]"/>
            </div>
        </div>
    )
}