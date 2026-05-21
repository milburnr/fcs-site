import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Camera } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/Schema";
import { Breadcrumb } from "@/components/Breadcrumb";
import { InternalLinks } from "@/components/InternalLinks";
import { GALLERY_PROJECTS, getProjectImages, R2_BASE_URL } from "@/lib/gallery-data";

export const metadata: Metadata = {
  alternates: { canonical: "https://floridaconstructionspecialists.com/gallery/" },
  title: "Project Gallery",
  description:
    "Browse commercial construction projects completed by Florida Construction Specialists across Tampa Bay.",
  openGraph: {
    title: "Project Gallery",
    description: "Browse commercial construction projects completed by Florida Construction Specialists across Tampa Bay.",
    url: "https://floridaconstructionspecialists.com/gallery/",
    type: "website",
    siteName: "Florida Construction Specialists",
    images: [{ url: "https://floridaconstructionspecialists.com/og-image.jpg", width: 1200, height: 630, alt: "Florida Construction Specialists - Tampa Bay Commercial Construction" }],
  },
};

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/gallery/" },
];

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Breadcrumb items={[{ name: "Project Gallery", href: "/gallery/" }]} />

      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-brand-green-dark via-brand-green-forest to-brand-green-dark">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            Our Project Gallery
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Browse completed projects by Florida Construction Specialists. From
            custom homes to commercial builds, see the quality craftsmanship
            behind every project.
          </p>
        </div>
      </section>

      {/* Project Card Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_PROJECTS.map((project, index) => {
              const images = getProjectImages(project);
              const heroThumb = images[0]?.thumb ?? "";

              return (
                <Link
                  key={project.slug}
                  href={`/gallery/${project.slug}/`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={heroThumb}
                      alt={`${project.name} project`}
                      loading={index < 3 ? "eager" : "lazy"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-3 right-3 bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Camera className="w-3 h-3" />
                      {project.photoCount} photos
                    </span>
                  </div>
                  <div className="p-5">
                    <h2 className="text-lg font-bold text-brand-green-dark group-hover:text-brand-green transition-colors">
                      {project.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      View all {project.photoCount} project photos
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how Florida Construction Specialists can bring your
            vision to life with the same quality and attention to detail you see here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-cta">
              Schedule a Consultation
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

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <InternalLinks
            links={[
              { href: "/commercial/", label: "Commercial Construction" },
              { href: "/residential/", label: "Residential Construction" },
              { href: "/insurance/", label: "Insurance Restoration" },
              { href: "/commercial/", label: "All Services" },
              { href: "/contact/", label: "Contact Us" },
            ]}
            title="Related Resources"
          />
        </div>
      </section>
    </>
  );
}
