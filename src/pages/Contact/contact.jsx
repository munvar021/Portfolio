import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faPaperPlane,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ContactContainer,
  ContactContent,
  ContentWrapper,
  ContactForm,
  ContactInfo,
  FormGroup,
  Input,
  Textarea,
  SubmitButton,
  ContactTitle,
  ContactSubtitle,
  ContactCard,
  InfoItem,
  SocialLinks,
  SocialIcon,
  ErrorMessage,
  SuccessMessage,
  ContactGrid,
  MapContainer,
} from "./contactStyles";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setIsSubmitting(true);

    setTimeout(() => {
      console.log(data);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      reset();

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <ContactContainer>
      <ContactTitle>Get In Touch</ContactTitle>
      <ContactSubtitle>
        Feel free to reach out for collaboration opportunities, questions, or
        just to say hello!
      </ContactSubtitle>

      <ContactGrid>
        <ContactContent>
          <ContentWrapper>
            <ContactForm onSubmit={handleSubmit(onSubmit)}>
              <FormGroup>
                <Input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Your Name"
                  isError={errors.name}
                />
                {errors.name && (
                  <ErrorMessage>{errors.name.message}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="Your Email"
                  isError={errors.email}
                />
                {errors.email && (
                  <ErrorMessage>{errors.email.message}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Input
                  {...register("subject", { required: "Subject is required" })}
                  placeholder="Subject"
                  isError={errors.subject}
                />
                {errors.subject && (
                  <ErrorMessage>{errors.subject.message}</ErrorMessage>
                )}
              </FormGroup>

              <FormGroup>
                <Textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder="Your Message"
                  rows={5}
                  isError={errors.message}
                />
                {errors.message && (
                  <ErrorMessage>{errors.message.message}</ErrorMessage>
                )}
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <FontAwesomeIcon icon={faCircleNotch} spin /> Sending...
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} /> Send Message
                  </>
                )}
              </SubmitButton>

              {submitSuccess && (
                <SuccessMessage>
                  Thank you for your message! I'll get back to you soon.
                </SuccessMessage>
              )}
            </ContactForm>
          </ContentWrapper>
        </ContactContent>

        <ContactInfo>
          <ContactCard>
            <InfoItem>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <div>
                <h4>Location</h4>
                <p>Kanigiri</p>
              </div>
            </InfoItem>

            <InfoItem>
              <FontAwesomeIcon icon={faEnvelope} />
              <div>
                <h4>Email</h4>
                <p>munvar021@gmail.com</p>
              </div>
            </InfoItem>

            <InfoItem>
              <FontAwesomeIcon icon={faPhone} />
              <div>
                <h4>Phone</h4>
                <p>+91 9948525819</p>
              </div>
            </InfoItem>

            <SocialLinks>
              <SocialIcon
                href="https://www.linkedin.com/in/munvar-khajavali-shaik"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </SocialIcon>
              <SocialIcon
                href="https://github.com/munvar021"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </SocialIcon>
              <SocialIcon
                href="https://www.instagram.com/munvar_khajavali"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </SocialIcon>
            </SocialLinks>
          </ContactCard>

          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6044.294191325305!2d-73.99762139238644!3d40.7505577757734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629998006124!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Office Location"
            />
          </MapContainer>
        </ContactInfo>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact;
