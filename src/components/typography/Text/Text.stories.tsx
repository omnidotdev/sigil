import { Text } from "components";
import { HStack, Stack, styled } from "generated/panda/jsx";
import { textStyles } from "lib/theme/extensions";

import type { Meta, StoryObj } from "@storybook/react";
import type { TextProps } from "components";
import type { FontToken } from "generated/panda/tokens";

type Story = StoryObj<typeof meta>;

interface TypesetProps {
  /** Name of font to showcase. */
  fontName: string;
  /** Token-attached font family. */
  fontFamily: FontToken;
  /** Brief description of intended font use case(s). */
  intendedUse: string;
}

const BASE_TEXT = "Sphinx of black quartz, judge my vow.";

const meta = {
  title: "Components/Typography/Text",
  component: Text,
} satisfies Meta;

const fontWeights = [
  { name: "Thin", weight: 100 },
  { name: "Light", weight: 300 },
  { name: "Normal", weight: 400 },
  { name: "Medium", weight: 500 },
  { name: "Bold", weight: 700 },
  { name: "Extrabold", weight: 800 },
  { name: "Heavy", weight: 900 },
];

const htmlTags = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "span",
] as TextProps["as"][];

/**
 * Typeset for showcasing font variations.
 */
const Typeset = ({ fontName, fontFamily, intendedUse }: TypesetProps) => (
  <Stack fontFamily={fontFamily}>
    <Stack mb={4}>
      <Text textStyle="2xl" fontWeight="bold">
        Font: {fontName}
      </Text>

      <Text>
        <styled.span fontWeight="bold">Intended Use:</styled.span> {intendedUse}
      </Text>

      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        quaerat omnis blanditiis tenetur, dolorum officiis earum optio
        doloribus, quam perferendis accusamus temporibus error iusto rerum
        facilis debitis similique itaque eum.
      </Text>
    </Stack>

    <HStack gap={12}>
      <Stack gap={1}>
        {fontWeights.map(({ name, weight }) => (
          <Text key={name} fontWeight={weight}>
            {name} ({weight})
          </Text>
        ))}
      </Stack>

      <Stack gap={1}>
        {fontWeights.map(({ name, weight }) => (
          <Text key={name} fontWeight={weight} fontStyle="italic">
            {name} Italic ({weight})
          </Text>
        ))}
      </Stack>
    </HStack>

    <HStack gap={12}>
      <Stack gap={1}>
        {fontWeights.map(({ name, weight }) => (
          <Text key={name} fontWeight={weight}>
            {BASE_TEXT}
          </Text>
        ))}
      </Stack>

      <Stack gap={1}>
        {fontWeights.map(({ name, weight }) => (
          <Text key={name} fontWeight={weight} fontStyle="italic">
            {BASE_TEXT}
          </Text>
        ))}
      </Stack>
    </HStack>
  </Stack>
);

export const PrimaryFont: Story = {
  render: () => (
    <Typeset
      fontName="Assistant"
      fontFamily="primary"
      intendedUse="Body copy,
  headings"
    />
  ),
};

export const CodeFont: Story = {
  render: () => (
    <Typeset fontName="Fira Code" fontFamily="code" intendedUse="Code blocks" />
  ),
};

export const HTMLTags = () => (
  <Stack>
    {htmlTags.map((tag) => (
      <Text key={tag} as={tag}>
        This is a {tag} element
      </Text>
    ))}
  </Stack>
);

export const Sizes = () => (
  <Stack>
    {Object.keys(textStyles)
      // TODO figure out why these styles are breaking (filtered here as workaround)
      .filter((style) => !["2xs", "8xl", "9xl"].includes(style))
      .map((textStyle) => (
        <Text key={textStyle} textStyle={textStyle}>
          {textStyle}: {BASE_TEXT}
        </Text>
      ))}
  </Stack>
);

export default meta;
