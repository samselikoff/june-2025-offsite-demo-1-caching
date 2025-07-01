import Spinner from '@/app/_components/spinner';

export default function Loading() {
  return (
    <div className="w-full flex justify-center items-center h-full">
      <Spinner className="size-6" />
    </div>
  );
}
