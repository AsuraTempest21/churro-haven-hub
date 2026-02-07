import { Skeleton } from '@/components/ui/skeleton';

interface MenuItemSkeletonProps {
  variant?: 'grid' | 'list' | 'featured';
}

const MenuItemSkeleton = ({ variant = 'grid' }: MenuItemSkeletonProps) => {
  if (variant === 'featured') {
    return (
      <div className="flex flex-col overflow-hidden rounded-xl bg-card border border-border shadow-xl">
        <Skeleton className="w-full h-48" />
        <div className="flex flex-col gap-2 p-4">
          <div className="flex items-center gap-2">
            <Skeleton className="w-4 h-4 rounded" />
            <Skeleton className="w-12 h-4" />
          </div>
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
          <div className="flex items-center justify-between mt-3">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-10 w-20 rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'list') {
    return (
      <div className="flex items-start gap-3 p-3 bg-card rounded-xl border border-border shadow-md">
        <Skeleton className="w-24 h-24 shrink-0 rounded-lg" />
        <div className="flex flex-col flex-1 h-full justify-between min-h-24">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton className="w-4 h-4 rounded" />
              <Skeleton className="w-10 h-4" />
            </div>
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-2/3" />
          </div>
          <div className="flex items-end justify-between mt-2">
            <Skeleton className="h-5 w-14" />
            <Skeleton className="h-9 w-16 rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  // Grid variant (default)
  return (
    <div className="flex flex-col gap-3 p-3 bg-card rounded-xl border border-border shadow-lg">
      <Skeleton className="aspect-square w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-5 w-16 mt-2" />
      </div>
    </div>
  );
};

export default MenuItemSkeleton;
