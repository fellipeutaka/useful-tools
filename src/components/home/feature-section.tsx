import { useTranslations } from "next-intl";
import { Icons } from "../icons";
import { Heading } from "../ui/heading";

export function FeatureSection() {
  const t = useTranslations("pages.home");

  return (
    <section
      id="features"
      className="space-y-6 py-8 text-center lg:py-24 md:py-12"
    >
      <Heading
        as="h2"
        variant="h2"
        className="text-3xl leading-[1.1] md:text-6xl sm:text-3xl"
      >
        {t("features.title")}
      </Heading>
      <p className="mx-auto max-w-[85%] text-muted-foreground leading-normal sm:text-lg sm:leading-7">
        {t("features.subtitle")}
      </p>
      <div className="mx-auto grid justify-center gap-4 md:max-w-[64rem] md:grid-cols-3 sm:grid-cols-2">
        <FeatureCard
          title={t("features.cryptography.title")}
          description={t("features.cryptography.description")}
          icon={Icons.QrCode}
        />
        <FeatureCard
          title={t("features.text.title")}
          description={t("features.text.description")}
          icon={Icons.Text}
        />
        <FeatureCard
          title={t("features.clock.title")}
          description={t("features.clock.description")}
          icon={Icons.Clock}
        />
        <FeatureCard
          title={t("features.currency.title")}
          description={t("features.currency.description")}
          icon={Icons.DollarSign}
        />
        <FeatureCard
          title={t("features.files.title")}
          description={t("features.files.description")}
          icon={Icons.Files}
        />
        <FeatureCard
          title={t("features.devtools.title")}
          description={t("features.devtools.description")}
          icon={Icons.Code}
        />
      </div>
    </section>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ElementType;
};

function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-border p-2 text-left">
      <div className="flex h-44 flex-col justify-between rounded-md p-6">
        <Icon className="size-12" />
        <div className="space-y-2">
          <h3 className="font-bold">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
