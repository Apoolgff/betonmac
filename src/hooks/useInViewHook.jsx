import { useInView } from 'react-intersection-observer';

const useInViewHook = (threshold ) => {
    const { ref, inView } = useInView({ threshold });
    return { ref, inView };
};

export default useInViewHook;
