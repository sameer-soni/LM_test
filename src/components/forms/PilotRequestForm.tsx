import { useState } from "react";
import { ChevronRight, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  role: string;
  organization: string;
  classrooms: string;
  sites: string;
  city: string;
  state: string;
  email: string;
  phone: string;
  problem: string;
}

export function PilotRequestForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    role: "",
    organization: "",
    classrooms: "",
    sites: "",
    city: "",
    state: "",
    email: "",
    phone: "",
    problem: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card-feature text-center py-12">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success mb-6">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold mb-3">Request Received!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Thank you for your interest in LiveSitter. Our team will reach out within 24 hours to discuss next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="label-field">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="input-field"
            placeholder="Jane Smith"
          />
        </div>
        <div>
          <label htmlFor="role" className="label-field">
            Role *
          </label>
          <select
            id="role"
            name="role"
            required
            value={formData.role}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Select your role</option>
            <option value="owner">Owner</option>
            <option value="director">Director</option>
            <option value="compliance">Compliance Manager</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="organization" className="label-field">
          Organization Name *
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          required
          value={formData.organization}
          onChange={handleChange}
          className="input-field"
          placeholder="Sunshine Childcare Centers"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="classrooms" className="label-field">
            Number of Classrooms *
          </label>
          <input
            type="number"
            id="classrooms"
            name="classrooms"
            required
            min="1"
            value={formData.classrooms}
            onChange={handleChange}
            className="input-field"
            placeholder="10"
          />
        </div>
        <div>
          <label htmlFor="sites" className="label-field">
            Number of Sites *
          </label>
          <input
            type="number"
            id="sites"
            name="sites"
            required
            min="1"
            value={formData.sites}
            onChange={handleChange}
            className="input-field"
            placeholder="3"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="city" className="label-field">
            City *
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            className="input-field"
            placeholder="Austin"
          />
        </div>
        <div>
          <label htmlFor="state" className="label-field">
            State *
          </label>
          <input
            type="text"
            id="state"
            name="state"
            required
            value={formData.state}
            onChange={handleChange}
            className="input-field"
            placeholder="TX"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="label-field">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            placeholder="jane@sunshinechildcare.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="label-field">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
            placeholder="(512) 555-0123"
          />
        </div>
      </div>

      <div>
        <label htmlFor="problem" className="label-field">
          What problem are you trying to solve? *
        </label>
        <textarea
          id="problem"
          name="problem"
          required
          rows={4}
          value={formData.problem}
          onChange={handleChange}
          className="input-field resize-none"
          placeholder="Describe your current compliance challenges..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center text-base py-4 disabled:opacity-70"
      >
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <>
            Request a Pilot
            <ChevronRight className="h-5 w-5" />
          </>
        )}
      </button>
    </form>
  );
}
