import Layout from "@useful-tools/components/Layout";
import ColorPickerComponent from "@useful-tools/components/tools/ColorPicker";

const seo = {
  title: "Color Picker | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function ColorPicker() {
  return (
    <Layout seo={seo}>
      <ColorPickerComponent />
    </Layout>
  );
}
