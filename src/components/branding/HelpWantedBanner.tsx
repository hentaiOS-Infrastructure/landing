import type { PropsWithChildren } from "react";
import Image from "next/image";


interface FnafBannerProps extends PropsWithChildren {
    enabled?: boolean;
    title?: string;
    children?: string;
}

const ZaFrame = (props: FnafBannerProps) => {
    const { enabled } = props;
    if (!enabled) {
        return null;
    }
    return (
        <section className="my-8 w-full relative flex flex-col items-center justify-center">
            <Image
                className="relative object-cover object-right max-w-full"
                height={520}
                width={1280}
                alt=""
                priority={true}
                src="/zaza.jpg"
            />
        </section>
    );
};


export default ZaFrame;
