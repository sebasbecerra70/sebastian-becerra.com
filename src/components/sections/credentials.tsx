import { CREDENTIALS, type Credential } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const CredentialRow = ({
  credential,
  index,
}: {
  credential: Credential;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-card/95 backdrop-blur-md text-card-foreground border-border",
          "hover:border-primary/20 transition-colors duration-300"
        )}
      >
        <CardContent className="p-5 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <div className="md:w-1/3 space-y-1">
            <p className="text-base font-bold tracking-tight text-foreground">
              {credential.title}
            </p>
            <p className="text-sm text-muted-foreground">{credential.org}</p>
          </div>
          <p className="md:flex-1 text-sm text-muted-foreground leading-relaxed">
            {credential.detail}
          </p>
          {credential.period && (
            <Badge
              variant="secondary"
              className="w-fit font-mono text-xs font-normal shrink-0"
            >
              {credential.period}
            </Badge>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const CredentialsSection = () => {
  return (
    <SectionWrapper id="credentials" className="py-20 md:py-28 z-10">
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="credentials"
          title="Education"
          desc="Where the fundamentals came from."
          className="relative mb-10 md:mb-16 mt-0"
        />

        <div className="flex flex-col gap-4">
          {CREDENTIALS.map((credential, index) => (
            <CredentialRow
              key={credential.title}
              credential={credential}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CredentialsSection;
