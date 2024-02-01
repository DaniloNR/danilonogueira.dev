import { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr/CaretLeft";
import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import { X as Close } from "@phosphor-icons/react/dist/ssr/X";

type GalleryProps = {
  images: string[];
  onClose: () => void;
};

export default function Gallery({ images, onClose }: GalleryProps) {
  const [slideNum, setSlideNum] = useState(0);
  const isNextDisabled = slideNum === images.length - 1;
  const isPrevDisabled = slideNum === 0;

  function changeSlide(direction: number) {
    setSlideNum((prev) => {
      if (prev >= 0 && prev <= images.length) {
        return prev + direction;
      }
      return prev;
    });
  }

  return (
    <div className={styles.gallery}>
      <button role="button" type="button" onClick={onClose}>
        <Close size="2rem" color="currentcolor" alt="Close" />
      </button>
      <button
        role="button"
        type="button"
        onClick={() => changeSlide(-1)}
        disabled={isPrevDisabled}
        aria-disabled={isPrevDisabled}
      >
        <CaretLeft size="4rem" color="currentcolor" alt="Previous" />
      </button>
      <div className={styles.image} onClick={onClose}>
        <Image
          src={images[slideNum]}
          width="500"
          height="500"
          sizes="100vw"
          alt={`Slide ${slideNum + 1}`}
        />
      </div>
      <button
        role="button"
        type="button"
        onClick={() => changeSlide(1)}
        disabled={isNextDisabled}
        aria-disabled={isNextDisabled}
      >
        <CaretRight size="4rem" color="currentcolor" alt="Next" />
      </button>
    </div>
  );
}
