"use client";

import { AnimatePresence } from "framer-motion";
import { contactInfo, socialLinks } from "@/config/contact";
import { useContactForm } from "@/hooks/use-contact-form";
import {
  PageHero,
  PageLabel,
  PageTitle,
  Accent,
  PageSubtitle,
  ContactSection,
  ContactGrid,
  FormWrap,
  FormTitle,
  FormSubtitle,
  Form,
  FormRow,
  FormGroup,
  Label,
  Input,
  Textarea,
  ErrorMsg,
  SubmitBtn,
  AlertSuccess,
  AlertError,
  InfoCol,
  InfoCard,
  InfoCardTitle,
  InfoItem,
  InfoIcon,
  InfoText,
  InfoLabel,
  InfoValue,
  SocialCard,
  SocialTitle,
  SocialLinks,
  SocialLink,
} from "./contact.styles";

const Contact = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    status,
    sending,
    formState: { errors },
  } = useContactForm();

  return (
    <>
      <PageHero>
        <div className="container">
          <PageLabel
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {">"} contact --open
          </PageLabel>
          <PageTitle
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Let&apos;s <Accent>Build</Accent> Together
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            Have a project in mind or want to collaborate? I&apos;d love to hear
            from you. Let&apos;s connect!
          </PageSubtitle>
        </div>
      </PageHero>

      <ContactSection>
        <div className="container">
          <ContactGrid>
            <FormWrap
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <FormTitle>Send Us a Message</FormTitle>
              <FormSubtitle>
                Fill out the form and we&apos;ll get back to you within 24
                hours.
              </FormSubtitle>

              <Form onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormRow>
                  <FormGroup>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      $error={!!errors.name}
                      {...register("name", {
                        required: "Name is required",
                        minLength: { value: 2, message: "Min 2 characters" },
                      })}
                    />
                    {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      $error={!!errors.email}
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <ErrorMsg>{errors.email.message}</ErrorMsg>
                    )}
                  </FormGroup>
                </FormRow>

                <FormGroup>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Project Inquiry"
                    $error={!!errors.subject}
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                  />
                  {errors.subject && (
                    <ErrorMsg>{errors.subject.message}</ErrorMsg>
                  )}
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    $error={!!errors.message}
                    {...register("message", {
                      required: "Message is required",
                      minLength: { value: 20, message: "Min 20 characters" },
                    })}
                  />
                  {errors.message && (
                    <ErrorMsg>{errors.message.message}</ErrorMsg>
                  )}
                </FormGroup>

                <FormGroup $hidden>
                  <input
                    type="text"
                    {...register("honeypot")}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </FormGroup>

                <AnimatePresence>
                  {status === "success" && (
                    <AlertSuccess
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <i className="fa-solid fa-circle-check" />
                      Message sent! We&apos;ll be in touch within 24 hours.
                    </AlertSuccess>
                  )}
                  {status === "error" && (
                    <AlertError
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <i className="fa-solid fa-circle-exclamation" />
                      Something went wrong. Please try again or email us
                      directly.
                    </AlertError>
                  )}
                </AnimatePresence>

                <SubmitBtn type="submit" disabled={sending}>
                  {sending ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane" /> Send Message
                    </>
                  )}
                </SubmitBtn>
              </Form>
            </FormWrap>

            <InfoCol
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              <InfoCard>
                <InfoCardTitle>
                  <i className="fa-solid fa-address-card" /> Contact Info
                </InfoCardTitle>
                {contactInfo.map(({ icon, label, value }) => (
                  <InfoItem key={label}>
                    <InfoIcon>
                      <i className={`fa-solid ${icon}`} />
                    </InfoIcon>
                    <InfoText>
                      <InfoLabel>{label}</InfoLabel>
                      <InfoValue>{value}</InfoValue>
                    </InfoText>
                  </InfoItem>
                ))}
              </InfoCard>

              <SocialCard>
                <SocialTitle>Follow Us</SocialTitle>
                <SocialLinks>
                  {socialLinks.map(({ icon, label, href }) => (
                    <SocialLink
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={icon} /> {label}
                    </SocialLink>
                  ))}
                </SocialLinks>
              </SocialCard>
            </InfoCol>
          </ContactGrid>
        </div>
      </ContactSection>
    </>
  );
};

export default Contact;
