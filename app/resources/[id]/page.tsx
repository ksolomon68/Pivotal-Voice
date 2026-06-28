import { notFound } from 'next/navigation';
import { getResourceBySlug, resources } from '@/lib/resources';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FileText, Video, CheckCircle, ArrowLeft, Download, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import PrintButton from './PrintButton';

export async function generateStaticParams() {
    return resources.map((r) => ({ id: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const resource = getResourceBySlug(id);
    if (!resource) return {};
    return {
        title: `${resource.title} | Pivotal Voice Resource Library`,
        description: resource.description,
    };
}

const typeIcon = (type: string) => {
    if (type === 'Video') return Video;
    if (type === 'Checklist') return CheckCircle;
    return FileText;
};

export default async function ResourceDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const resource = getResourceBySlug(id);
    if (!resource) notFound();

    const Icon = typeIcon(resource.type);

    // Convert markdown-ish content to basic HTML
    const renderContent = (content: string) => {
        const lines = content.split('\n');
        let html = '';
        let inTable = false;
        let tableRows: string[] = [];

        const flushTable = () => {
            if (tableRows.length > 0) {
                const [header, , ...body] = tableRows;
                const headerCells = header.split('|').filter(Boolean).map(c =>
                    `<th class="px-4 py-2 text-left text-gold/80 text-sm font-semibold border-b border-gold/20">${c.trim()}</th>`
                ).join('');
                const bodyRows = body.map(row =>
                    `<tr>${row.split('|').filter(Boolean).map(c =>
                        `<td class="px-4 py-2 text-cream/70 text-sm border-b border-gold/10">${c.trim()}</td>`
                    ).join('')}</tr>`
                ).join('');
                html += `<div class="overflow-x-auto my-6"><table class="w-full border border-gold/20 rounded-lg overflow-hidden"><thead><tr>${headerCells}</tr></thead><tbody>${bodyRows}</tbody></table></div>`;
                tableRows = [];
                inTable = false;
            }
        };

        for (const line of lines) {
            if (line.startsWith('|')) {
                inTable = true;
                tableRows.push(line);
                continue;
            }
            if (inTable) flushTable();

            if (line.startsWith('## ')) {
                html += `<h2 class="text-xl font-bold text-white mt-10 mb-4 font-display">${line.slice(3)}</h2>`;
            } else if (line.startsWith('### ')) {
                html += `<h3 class="text-base font-semibold text-gold mt-6 mb-2">${line.slice(4)}</h3>`;
            } else if (line.startsWith('**') && line.endsWith('**') && !line.slice(2, -2).includes('**')) {
                html += `<p class="text-white font-semibold mt-4 mb-1">${line.slice(2, -2)}</p>`;
            } else if (line.startsWith('- ') || line.startsWith('☐ ') || line.startsWith('❌ ') || line.startsWith('✅ ')) {
                html += `<li class="text-cream/75 text-sm leading-relaxed mb-1 ml-4">${line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')}</li>`;
            } else if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ') || line.startsWith('5. ')) {
                html += `<li class="text-cream/75 text-sm leading-relaxed mb-1 ml-4 list-decimal">${line.slice(3).replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')}</li>`;
            } else if (line.startsWith('> ')) {
                html += `<blockquote class="border-l-4 border-gold/40 pl-4 my-4 italic text-cream/70 text-sm">${line.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')}</blockquote>`;
            } else if (line === '---') {
                html += `<hr class="border-gold/15 my-8" />`;
            } else if (line.trim() === '') {
                html += `<br/>`;
            } else {
                html += `<p class="text-cream/75 text-sm leading-relaxed mb-3">${line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-gold hover:text-gold/80 underline" target="_blank">$1</a>')}</p>`;
            }
        }
        if (inTable) flushTable();
        return html;
    };

    const relatedResources = resources
        .filter((r) => r.id !== resource.id && r.category === resource.category)
        .slice(0, 3);

    return (
        <>
            <Header />
            <main className="min-h-screen">
                {/* Header */}
                <section className="relative bg-gradient-to-b from-navy via-navy to-navy-dark border-b border-gold/15 py-16 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.06)_0%,_transparent_60%)]" />
                    <div className="container-custom relative z-10">
                        <Link href="/resources" className="inline-flex items-center gap-2 text-cream/50 hover:text-gold text-sm mb-8 transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Resource Library
                        </Link>

                        <div className="max-w-3xl">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-lg flex items-center justify-center">
                                    <Icon className="w-5 h-5 text-gold" />
                                </div>
                                <span className="text-gold/70 text-xs font-medium uppercase tracking-widest">{resource.category}</span>
                            </div>

                            <h1 className="text-3xl md:text-4xl font-bold text-white font-display mb-4 leading-tight">
                                {resource.title}
                            </h1>
                            <p className="text-cream/60 text-base mb-6">{resource.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {resource.tags.map((tag) => (
                                    <span key={tag} className="text-xs bg-navy-dark/80 text-cream/50 px-3 py-1 rounded-full border border-gold/10">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="section">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Main content */}
                            <div className="lg:col-span-2">
                                <div
                                    className="prose-custom"
                                    dangerouslySetInnerHTML={{ __html: renderContent(resource.content) }}
                                />
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-6">
                                {/* Download card */}
                                <div className="card border-gold/30">
                                    <div className="w-10 h-10 bg-gold/10 border border-gold/20 rounded-lg flex items-center justify-center mb-4">
                                        <Download className="w-5 h-5 text-gold" />
                                    </div>
                                    <h3 className="text-white font-semibold mb-2">Save This Resource</h3>
                                    <p className="text-cream/50 text-sm mb-4">
                                        Print or save this page for reference. Use Ctrl+P (or ⌘+P) to print as PDF.
                                    </p>
                                    <PrintButton />
                                </div>

                                {/* PR Services CTA */}
                                <div className="card border-gold/20 bg-gold/5">
                                    <p className="text-gold/70 text-xs font-medium uppercase tracking-wide mb-2">Pivotal Voice</p>
                                    <h3 className="text-white font-semibold mb-2">Need Expert Help?</h3>
                                    <p className="text-cream/60 text-sm mb-4">
                                        Our communications professionals work directly with candidates and civic leaders across Ellis County.
                                    </p>
                                    <ul className="space-y-2 mb-4">
                                        {['Campaign messaging strategy', 'Media relations & press outreach', 'Crisis communications'].map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-cream/70 text-xs">
                                                <ChevronRight className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/services" className="btn-secondary text-sm w-full text-center block">
                                        Explore Services
                                    </Link>
                                </div>

                                {/* Related resources */}
                                {relatedResources.length > 0 && (
                                    <div>
                                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Related Resources</h3>
                                        <div className="space-y-3">
                                            {relatedResources.map((r) => (
                                                <Link
                                                    key={r.id}
                                                    href={`/resources/${r.slug}`}
                                                    className="card block hover:border-gold/40 transition-colors group"
                                                >
                                                    <span className="text-gold/60 text-xs uppercase tracking-wide">{r.type}</span>
                                                    <p className="text-white text-sm font-medium mt-1 group-hover:text-gold transition-colors leading-snug">
                                                        {r.title}
                                                    </p>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
