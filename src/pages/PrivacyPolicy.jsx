import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dark Header Section */}
      <div className="page-hero">
        <img src="/src/assets/images/Hero/herobanner.jpg" alt="hero" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-slate-900/75" />
        <div className="max-w-7xl mx-auto px-10 md:px-20 lg:px-48 relative z-10 h-full flex flex-col justify-center">
          <Button
            onClick={() => navigate(-1)}
            variant="ghost"
            className="flex items-center gap-2 mb-6 text-white hover:text-blue-400 hover:bg-transparent transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-slate-300 text-lg">
            Your privacy is important to us. Learn how we collect, use, and protect your data.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
        {/* Last Updated */}
        <Card className="mb-8 border-l-4 border-blue-600">
          <CardContent className="pt-6">
            <p className="text-slate-700">
              <span className="font-semibold">Last Updated:</span> March 25, 2026
            </p>
          </CardContent>
        </Card>

        {/* Introduction */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Cultre Boat ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our services.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>1. Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Personal Information</h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                We may collect personal information that you voluntarily provide to us, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 ml-2">
                <li>Name and email address</li>
                <li>Phone number</li>
                <li>Company name and job title</li>
                <li>Resume and portfolio information</li>
                <li>LinkedIn profile and other social media links</li>
                <li>Messages and inquiries you send us</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Automatically Collected Information</h3>
              <p className="text-slate-700 leading-relaxed mb-3">
                When you visit our website, we may automatically collect certain information about your device and browsing activity:
              </p>
              <ul className="list-disc list-inside text-slate-700 space-y-2 ml-2">
                <li>IP address and browser type</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referring website and exit pages</li>
                <li>Device type and operating system</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>2. How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-2">
              <li>To provide and improve our services</li>
              <li>To respond to your inquiries and requests</li>
              <li>To process job applications and career opportunities</li>
              <li>To send marketing communications and updates (with your consent)</li>
              <li>To analyze website usage and trends</li>
              <li>To prevent fraud and ensure security</li>
              <li>To comply with legal obligations</li>
            </ul>
          </CardContent>
        </Card>

        {/* Information Sharing */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>3. Information Sharing and Disclosure</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-2">
              <li>With service providers who assist us in operating our website and conducting our business</li>
              <li>When required by law or legal process</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>With your explicit consent</li>
            </ul>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>4. Data Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
            </p>
          </CardContent>
        </Card>

        {/* Cookies and Tracking */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>5. Cookies and Tracking Technologies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your experience. Cookies are small files stored on your device that help us remember your preferences and analyze website usage.
            </p>
            <p className="text-slate-700 leading-relaxed">
              You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
            </p>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>6. Your Privacy Rights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-2">
              <li>Right to access your personal information</li>
              <li>Right to correct inaccurate data</li>
              <li>Right to request deletion of your data</li>
              <li>Right to opt-out of marketing communications</li>
              <li>Right to data portability</li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              To exercise any of these rights, please contact us at hello@cultreboat.in.
            </p>
          </CardContent>
        </Card>

        {/* Third-Party Links */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>7. Third-Party Links</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </CardContent>
        </Card>

        {/* Children's Privacy */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>8. Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed">
              Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information promptly.
            </p>
          </CardContent>
        </Card>

        {/* Policy Updates */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>9. Changes to This Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by updating the "Last Updated" date at the top of this policy. Your continued use of our services following the posting of revised Privacy Policy means that you accept and agree to the changes.
            </p>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>10. Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <Card className="bg-slate-50">
              <CardContent className="pt-6 space-y-2">
                <p className="text-slate-700">
                  <span className="font-semibold">Email:</span> hello@cultreboat.in
                </p>
                <p className="text-slate-700">
                  <span className="font-semibold">Phone:</span> +1 (234) 567-890
                </p>
                <p className="text-slate-700">
                  <span className="font-semibold">Company:</span> Cultre Boat
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Acknowledgment */}
        <Card className="mt-16 border-l-4 border-blue-600">
          <CardContent className="pt-6">
            <p className="text-slate-700">
              By using our website and services, you acknowledge that you have read and understood this Privacy Policy and agree to be bound by its terms.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}












