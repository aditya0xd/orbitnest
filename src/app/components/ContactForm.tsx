import { useState, useRef } from "react";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().nonempty("Please enter your first name"),
  lastName: z.string(),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactForm() {
  const firstNameRef = useRef<HTMLInputElement | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const field = name as keyof FormData;

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleSubmit = async () => {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setErrors({}); // reset previous errors

    // 1️⃣ Validate with Zod
    const result = formSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: FormErrors = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormData;
        fieldErrors[field] = issue.message;
      });

      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    // 2️⃣ Submit to Google Form
    try {
      const GOOGLE_FORM_ACTION =
        "https://docs.google.com/forms/d/1u60H2SWuxzDvutxzMmYBxpdqP7AFbTAQSjdTav3zROs/formResponse";

      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        body: new URLSearchParams({
          "entry.952022691": formData.firstName,
          "entry.1240073725": formData.lastName,
          "entry.31294481": formData.email,
          "entry.1369429473": formData.message,
        }),
        mode: "no-cors",
      });

      // 3️⃣ Reset form on success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

      setErrors({});
    } catch (err) {
      // Optional global error
      console.error("Form submit failed", err);
    } finally {
      // 4️⃣ ALWAYS stop submitting
      setIsSubmitting(false); // stop submitting on success
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Black Background */}
      <div
        className="w-full md:w-1/2 text-white p-16 flex flex-col justify-start items-start"
        style={{ backgroundColor: "#030213" }}
      >
        <h1 className="text-7xl font-light leading-tight mb-16">
          Let's ignite
          <br />
          your fitness
          <br />
          success
        </h1>
        <div className="mt-auto">
          <p className="text-xl mb-6">Book Your Free Strategy Session Now</p>
          <p className="text-lg">ankit@orbitnest.in</p>
          <p className="text-lg">+91 8953317722</p>
        </div>
      </div>

      {/* Right Side - Form */}

      <div
        id="contact-form"
        className="w-full md:w-1/2 bg-muted/40 p-16 flex items-center justify-center"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="w-full max-w-2xl mx-auto">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  First name *
                </label>
                <input
                  id="contact-first-name"
                  ref={firstNameRef}
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className={`w-full px-4 py-3 bg-background border ${
                    errors.firstName ? "border-destructive" : "border-input"
                  } focus:outline-none focus:ring-2 focus:ring-ring`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className={`w-full px-4 py-3 bg-background border ${
                    errors.lastName ? "border-destructive" : "border-input"
                  } focus:outline-none focus:ring-2 focus:ring-ring`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`w-full px-4 py-3 bg-background border ${
                  errors.email ? "border-destructive" : "border-input"
                } focus:outline-none focus:ring-2 focus:ring-ring`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your coaching business and what you want to improve"
                rows={6}
                className={`w-full px-4 py-3 bg-background border ${
                  errors.message ? "border-destructive" : "border-input"
                } focus:outline-none focus:ring-2 focus:ring-ring resize-none`}
              />
              {errors.message && (
                <p className="text-destructive text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              disabled={isSubmitting}
              type="submit"
              className={`w-full py-4 text-lg font-medium transition-colors cursor-pointer
                ${
                  isSubmitting
                    ? "bg-muted cursor-not-allowed"
                    : "bg-primary text-primary-foreground hover:opacity-90"
                }
                `}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
