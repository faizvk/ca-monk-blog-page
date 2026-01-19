export const SkeletonCard = () => (
  <div className="p-4 bg-white border border-slate-100 rounded-2xl space-y-3 animate-pulse">
    <div className="flex gap-2">
      <div className="h-4 w-12 bg-slate-200 rounded-full" />
      <div className="h-4 w-12 bg-slate-200 rounded-full" />
    </div>
    <div className="h-6 w-3/4 bg-slate-200 rounded-md" />
    <div className="space-y-2">
      <div className="h-3 w-full bg-slate-100 rounded" />
      <div className="h-3 w-5/6 bg-slate-100 rounded" />
    </div>
    <div className="pt-4 border-t border-slate-50 flex justify-between">
      <div className="h-3 w-20 bg-slate-100 rounded" />
      <div className="h-3 w-16 bg-slate-100 rounded" />
    </div>
  </div>
);

export const DetailSkeleton = () => (
  <div className="animate-pulse space-y-8 max-w-4xl mx-auto">
    <div className="w-full h-64 md:h-[450px] bg-slate-100 rounded-[2rem]" />
    <div className="space-y-6">
      <div className="flex gap-3">
        <div className="h-4 w-20 bg-slate-100 rounded-md" />
        <div className="h-4 w-4 bg-slate-100 rounded-full" />
        <div className="h-4 w-32 bg-slate-100 rounded-md" />
      </div>
      <div className="space-y-3">
        <div className="h-12 bg-slate-100 rounded-xl w-3/4" />
        <div className="h-12 bg-slate-100 rounded-xl w-1/2" />
      </div>
      <div className="border-l-4 border-slate-100 pl-6 py-2">
        <div className="h-6 bg-slate-50 rounded-lg w-full mb-2" />
        <div className="h-6 bg-slate-50 rounded-lg w-2/3" />
      </div>
      <div className="space-y-4 pt-4">
        <div className="h-4 bg-slate-50 rounded-md w-full" />
        <div className="h-4 bg-slate-50 rounded-md w-full" />
        <div className="h-4 bg-slate-50 rounded-md w-4/5" />
      </div>
    </div>
  </div>
);
