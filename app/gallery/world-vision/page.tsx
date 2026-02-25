import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InternalLinks } from "@/components/InternalLinks";
import { GalleryCarousel } from "@/components/GalleryCarousel";
import { GALLERY_PROJECTS, getProjectImages } from "@/lib/gallery-data";

const project = GALLERY_PROJECTS.find((p) => p.slug === "world-vision")!;
const slides = getProjectImages(project);

export const metadata: Metadata = {
  alternates: { canonical: "https://floridaconstructionspecialists.com/gallery/world-vision/" },
  title: `${project.name} | Project Gallery | Florida Construction Specialists`,
  description: `View ${project.photoCount} photos of the ${project.name} project completed by Florida Construction Specialists in Tampa Bay.`,
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery/" },
  { name: project.name, href: `/gallery/${project.slug}/` },
];

export default function ProjectPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Breadcrumb
        items={[
          { name: "Project Gallery", href: "/gallery/" },
          { name: project.name, href: `/gallery/${project.slug}/` },
        ]}
      />

      <section className="py-12 bg-white">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-green-dark mb-2 font-heading">
            {project.name}
          </h1>
          <p className="text-gray-600 mb-8">
            {project.photoCount} project photos
          </p>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-gray-600 leading-relaxed mb-4">
              This $600,000 exterior restoration project focused on preserving historic architectural elements while reinforcing long-term building protection.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Scope included brick tuckpointing and sealing, reconstruction of an elaborate soffit and fascia system to comply with historic barrio specifications, and comprehensive waterproofing of all windows, soffit, and fascia assemblies. The result enhances structural durability while maintaining historic visual integrity.
            </p>
          </div>
          <GalleryCarousel slides={slides} />
          <p className="text-sm text-gray-500 italic mt-6">
            Note: Garage construction is still in progress.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Need Similar Work? Let&apos;s Talk
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Florida Construction Specialists delivers the same quality and attention
            to detail on every project. Get started with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Request a Consultation
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            links={[
              { href: "/commercial/", label: "Commercial Construction" },
              { href: "/residential/", label: "Residential Construction" },
              { href: "/insurance/", label: "Insurance Restoration" },
              { href: "/services/", label: "All Services" },
              { href: "/contact/", label: "Contact Us" },
            ]}
            title="Explore Our Services"
          />
        </div>
      </section>
    </>
  );
}
