import Link from 'next/link';
import { PageContainer } from '@/components/page-container';

export default function ContactPage() {
  return (
    <PageContainer>
      <section className="section-surface overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-medium p-8 text-white sm:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <p className="eyebrow text-brand-blue">Contact</p>
            <h1 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Contact Lanyard
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Contact Lanyard to discuss renovation, restoration, capital improvement, or maintenance needs for your
              property.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm leading-7 text-white/80">
              <p className="font-semibold text-white">Contact Information</p>
              <p className="mt-2">Phone: (469) 543-1001</p>
              <p>Address: 208 Industrial Ct., Wylie, TX 75098</p>
              <p className="mt-2">
                Exterior Renovations &bull; Interior Renovations &bull; Fire and Flood Restoration &bull; Maintenance
                Services
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/services" className="btn-primary">
                Review Services
              </Link>
              <Link href="/projects" className="btn-secondary border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
                View Projects
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-soft backdrop-blur">
            <h2 className="text-xl font-semibold text-white">Contact Details</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-white/80">
              <li>Phone: (469) 543-1001</li>
              <li>Address: 208 Industrial Ct., Wylie, TX 75098</li>
              <li>Services: Exterior Renovations, Interior Renovations, Fire and Flood Restoration, Maintenance Services</li>
            </ul>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
