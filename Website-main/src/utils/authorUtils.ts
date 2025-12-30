// Author utility functions

/**
 * Generates a URL-friendly slug from an author's name
 * @param name - The author's full name
 * @returns A lowercase, hyphenated slug
 */
export const generateAuthorSlug = (name: string): string => {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-'); // Replace multiple hyphens with single
};

/**
 * Finds an author by their slug from case studies
 * @param slug - The author slug to search for
 * @param caseStudies - Array of case studies
 * @returns The first matching author object or undefined
 */
export const findAuthorBySlug = (
    slug: string,
    caseStudies: { author: { name: string; role: string; company: string; bio: string; image: string; linkedin?: string; stats: { projects: string; experience: string } } }[]
) => {
    const study = caseStudies.find(
        (s) => generateAuthorSlug(s.author.name) === slug
    );
    return study?.author;
};

/**
 * Gets all case studies by a specific author
 * @param authorName - The author's name
 * @param caseStudies - Array of case studies
 * @returns Array of case studies by that author
 */
export const getCaseStudiesByAuthor = <T extends { author: { name: string } }>(
    authorName: string,
    caseStudies: T[]
): T[] => {
    return caseStudies.filter(
        (study) => study.author.name.toLowerCase() === authorName.toLowerCase()
    );
};

/**
 * Gets unique authors from case studies
 * @param caseStudies - Array of case studies
 * @returns Array of unique author objects
 */
export const getUniqueAuthors = <T extends { author: { name: string; role: string; company: string; bio: string; image: string; linkedin?: string; stats: { projects: string; experience: string } } }>(
    caseStudies: T[]
): T['author'][] => {
    const seenNames = new Set<string>();
    const uniqueAuthors: T['author'][] = [];

    for (const study of caseStudies) {
        const normalizedName = study.author.name.toLowerCase();
        if (!seenNames.has(normalizedName)) {
            seenNames.add(normalizedName);
            uniqueAuthors.push(study.author);
        }
    }

    return uniqueAuthors;
};
