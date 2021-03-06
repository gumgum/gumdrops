import { useEffect, RefObject } from 'react';
/**
 * Hook that alerts clicks outside of the passed ref
 */

export function useHandleClickOutside(ref: RefObject<HTMLElement>, callback: () => unknown): void {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event: MouseEvent): void {
            const clickOutside = ref.current && !ref.current.contains(event.target as Node);
            if (clickOutside && callback) {
                callback();
            }
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);

        return (): void => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
}
