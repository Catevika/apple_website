import { useProgress } from '@react-three/drei';

const Loader = () => {
  const { active, progress } = useProgress();

  if (!active) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <div className="rounded-full bg-black/70 px-5 py-3 text-sm text-white">
        Loading model... {Math.round(progress)}%
      </div>
    </div>
  );
};

export default Loader;