import { Carousel } from "components";

import type { Meta, StoryObj } from "@storybook/react";
type Story = StoryObj<typeof meta>;

const meta = {
  title: "Components/Core/Carousel",
  component: Carousel,
  tags: ["autodocs"],
} satisfies Meta;

const imageUrls = [
  "/img/beach.jpg",
  "/img/jellyfish.jpg",
  "/img/valley.jpg",
  "/img/glacier.jpg",
  "/img/aurora.jpg",
];

export const Default: Story = {
  args: {
    items: imageUrls.map((src, idx) => (
      <img
        key={idx}
        src={src}
        alt={`Slide ${idx}`}
        style={{ height: "398px", width: "100%", objectFit: "cover" }}
      />
    )),
  },
};

/**
 * By enabling the `allowMouseDrag` prop, the carousel can be dragged by the user to change the current slide.
 */
export const Draggable: Story = {
  args: {
    ...Default.args,
    allowMouseDrag: true,
  },
};

// TODO enable below (https://linear.app/omnidev/issue/OMNI-175/fix-and-enable-carousel-controlled-component-story)
/**
 * The current carousel page can be controlled by setting the `page` prop.
 */
// export const Controlled: Story = {
//   args: {
//     ...Default.args,
//   },
//   render: () => {
//     const [page, setPage] = useState(0);

//     return (
//       <>
//         <Button onClick={() => setPage(page - 1)}>Prev</Button>
//         <Carousel
//           {...Default.args}
//           page={page}
//           onPageChange={(evt) => {
//             console.log(evt);
//             setPage(evt.page);
//           }}
//         />
//         <Button onClick={() => setPage(page + 1)}>Next</Button>
//       </>
//     );
//   },
// };

/**
 * By enabling the `loop` prop, the carousel will loop back to the first slide after the last slide is reached.
 */
export const Loop: Story = {
  args: {
    ...Default.args,
    loop: true,
  },
};

/**
 * By enabling the `autoplay` prop, the carousel will automatically advance to the next slide after a set interval (default 4000ms).
 */
export const Autoplay: Story = {
  args: {
    ...Default.args,
    autoplay: true,
  },
};

/**
 * The carousel autoplay interval can be customized by passing an object with a `delay` property to the `autoplay` prop.
 */
export const CustomAutoplayInterval: Story = {
  args: {
    ...Default.args,
    autoplay: { delay: 1000 },
  },
};

export default meta;
