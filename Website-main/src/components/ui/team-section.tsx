import { motion } from 'framer-motion'

interface TeamMember {
  name: string
  role: string
  avatar: string
  link?: string
}

interface TeamSectionProps {
  title?: string
  description?: string
  members: TeamMember[]
  variant?: 'cards' | 'minimal'
}

// Card variant - Large images with hover effects
export function TeamCards({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {members.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group overflow-hidden"
        >
          <div className="relative h-80 w-full overflow-hidden rounded-xl">
            <img
              className="h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              src={member.avatar}
              alt={member.name}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
          <div className="px-1 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white transition-all duration-300 group-hover:text-[#780606] dark:group-hover:text-[#ff6b6b]">
                {member.name}
              </h3>
              <span className="text-xs text-gray-400 dark:text-gray-500">
                _{String(index + 1).padStart(2, '0')}
              </span>
            </div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 transition-all duration-300">
              {member.role}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Minimal variant - Small circular avatars
export function TeamMinimal({
  title,
  members,
}: {
  title: string
  members: TeamMember[]
}) {
  return (
    <div className="mt-6">
      <h3 className="mb-6 text-lg font-medium text-gray-800 dark:text-gray-200">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-4 border-t border-gray-200 dark:border-gray-700 py-6 md:grid-cols-4 lg:grid-cols-5">
        {members.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 5) * 0.05 }}
          >
            <div className="bg-background size-20 rounded-full border border-gray-200 dark:border-gray-700 p-0.5 shadow shadow-zinc-950/5">
              <img
                className="aspect-square w-full h-full rounded-full object-cover"
                src={member.avatar}
                alt={member.name}
                loading="lazy"
              />
            </div>
            <span className="mt-2 block text-sm font-medium text-gray-900 dark:text-white">
              {member.name}
            </span>
            <span className="text-muted-foreground block text-xs">
              {member.role}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Main TeamSection component
export default function TeamSection({
  title = 'Our Team',
  description,
  members,
  variant = 'cards',
}: TeamSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl"
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300"
            >
              {description}
            </motion.p>
          )}
        </div>

        {/* Team Grid */}
        {variant === 'cards' ? (
          <TeamCards members={members} />
        ) : (
          <TeamMinimal title="" members={members} />
        )}
      </div>
    </section>
  )
}

// Export types for external use
export type { TeamMember, TeamSectionProps }

