import { SectionIntro } from '../../components/SectionIntro/SectionIntro.jsx'
import { Portrait } from '../../components/Portrait/Portrait.jsx'
import { InfoBlock } from '../../components/InfoBlock/InfoBlock.jsx'
import { ArchiveTable } from '../../components/ArchiveTable/ArchiveTable.jsx'
import { stackBlocks } from '../../data/skills.js'
import { timeline } from '../../data/timeline.js'
import styles from './AboutPage.module.css'

export function AboutPage() {
  return (
    <>
      <h1 className="visually-hidden">About</h1>

      <div className={styles.about}>
        <Portrait
          src="https://res.cloudinary.com/dataimagesenzo/image/upload/v1779770926/9a147a80-1f78-48a0-a834-bfde147b3760_qkwc7g.jpg"
          alt="Enzo Rabossi"
        />

        <div className={styles.content}>
          <div className={`${styles.intro} scroll-in-group`}>
            <p className={styles.paragraph}>
              <span className="text-box">
                <span className="scroll-in text-indent">
                  I'm a full stack developer based in Copenhagen. I was born in Argentina and
                  moved to Denmark a few years ago, where I now live with my partner and my dog.
                </span>
              </span>
            </p>
            <p className={styles.paragraph}>
              <span className="text-box">
                <span className="scroll-in text-indent">
                  For more than 7 years I worked in the beer world — I had a beer shop, my own
                  brewery and a bar. That path taught me to run a business, manage teams and
                  solve real problems. In parallel, I've always been interested in technology: I
                  completed a diploma in Full Stack Web Development at UTN, and I'm currently in
                  The Bridge's bootcamp, building projects and developing my skills as a
                  developer.
                </span>
              </span>
            </p>
          </div>

          <div className={`${styles.blocks} scroll-in-group`}>
            {stackBlocks.map((block, index) => (
              <InfoBlock
                key={block.id}
                title={block.title}
                index={String(index + 1).padStart(2, '0')}
              >
                {block.paragraph}
              </InfoBlock>
            ))}
          </div>

          <div className={`${styles.blocks} scroll-in-group`}>
            <InfoBlock title="Based in" secondary>
              Copenhagen [ Denmark ]
            </InfoBlock>
            <InfoBlock title="Languages" secondary>
              Spanish, English
            </InfoBlock>
            <InfoBlock title="Credit" secondary>
              {`Design and development, Enzo Rabossi © ${new Date().getFullYear()}`}
            </InfoBlock>
            <InfoBlock title="Social" secondary>
              <span className={styles.socialLinks}>
                <a href="https://github.com/enzorabossi95" className="link-line">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/enzorabossi" className="link-line">
                  LinkedIn
                </a>
              </span>
            </InfoBlock>
          </div>

          <a className={`${styles.cta} link-line`} href="/#contact">
            Get in touch
          </a>
        </div>
      </div>

      <SectionIntro label="Background" meta="2017 — present">
        From the brewery floor to the bootcamp — the path so far.
      </SectionIntro>

      <section className={styles.timeline}>
        <ArchiveTable
          columns={['Role', 'Place', 'Years']}
          rows={timeline.map((item) => ({
            id: item.role,
            cells: [item.role, item.place, item.years],
          }))}
        />
      </section>
    </>
  )
}
