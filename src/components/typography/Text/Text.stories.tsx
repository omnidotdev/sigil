import { Text } from "components";
import { HStack, Stack, styled } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";
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

const meta = {
  title: "Components/Typography/Text",
  component: Text,
} satisfies Meta<typeof Text>;

/**
 * Typeset for showcasing font variations.
 */
const Typeset = ({ fontName, fontFamily, intendedUse }: TypesetProps) => (
  <Stack fontFamily={fontFamily}>
    <Stack mb={4}>
      <Text fontSize="2xl" fontWeight="bold">
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
        <Text fontWeight={100}>Thin (100)</Text>
        <Text fontWeight={300}>Light (300)</Text>
        <Text fontWeight={400}>Normal (400)</Text>
        <Text fontWeight={500}>Medium (500)</Text>
        <Text fontWeight={700}>Bold (700)</Text>
        <Text fontWeight={800}>Extrabold (800)</Text>
        <Text fontWeight={900}>Heavy (900)</Text>
      </Stack>

      <Stack gap={1}>
        <Text fontWeight={100} fontStyle="italic">
          Thin Italic (100)
        </Text>
        <Text fontWeight={300} fontStyle="italic">
          Light Italic (300)
        </Text>
        <Text fontWeight={400} fontStyle="italic">
          Normal Italic (400)
        </Text>
        <Text fontWeight={500} fontStyle="italic">
          Medium Italic (500)
        </Text>
        <Text fontWeight={700} fontStyle="italic">
          Bold Italic (700)
        </Text>
        <Text fontWeight={800} fontStyle="italic">
          Extrabold Italic (800)
        </Text>
        <Text fontWeight={900} fontStyle="italic">
          Heavy Italic (900)
        </Text>
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

export default meta;
