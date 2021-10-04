import React from "react";
import { PageLayout } from "../../components/page-layout/PageLayout";
import { ContactMeFrom } from "../../components/contactMe-form/ContactMeFrom";

export const ContactMe = () => {
  return (
    <div>
      <PageLayout>
        <ContactMeFrom />
      </PageLayout>
    </div>
  );
};
