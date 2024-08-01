import { useInView } from 'react-intersection-observer';

const useInViewHook = (threshold = 0.5) => {
    const { ref, inView } = useInView({ threshold });
    return { ref, inView };
};

export default useInViewHook;
