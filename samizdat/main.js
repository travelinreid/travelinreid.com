const navToggle = document.querySelector('.nav-toggle')
const navigation = document.querySelector('.site-nav')
const alphaDialog = document.querySelector('[data-alpha-dialog]')
const storeDialog = document.querySelector('[data-store-dialog]')
const bear = document.querySelector('[data-bear]')
const bearNote = document.querySelector('[data-bear-note]')
const submissionForm = document.querySelector('[data-submission-form]')
const submissionStatus = document.querySelector('[data-submission-status]')

const submissionEmail = 'djwnzz8dxs@privaterelay.appleid.com'

const bearNotes = [
  'No cloud. No algorithm. Just your ideas and a sheet of paper.',
  'Your printer has been waiting for this moment.',
  'Tiny publication. Surprisingly large consequences.',
  'Make something a person can carry home.',
]
let bearNoteIndex = 0

function toggleNavigation() {
  const isOpen = navigation.classList.toggle('is-open')
  navToggle.setAttribute('aria-expanded', String(isOpen))
  navToggle.querySelector('.sr-only').textContent = isOpen ? 'Close navigation' : 'Open navigation'
}

function closeNavigation() {
  navigation.classList.remove('is-open')
  navToggle.setAttribute('aria-expanded', 'false')
  navToggle.querySelector('.sr-only').textContent = 'Open navigation'
}

function openDialog(dialog) {
  if (dialog && !dialog.open) dialog.showModal()
}

function closeDialog(dialog) {
  if (dialog?.open) dialog.close()
}

function advanceBearNote() {
  bearNoteIndex = (bearNoteIndex + 1) % bearNotes.length
  bearNote.animate(
    [{ opacity: 0, transform: 'translateY(5px)' }, { opacity: 1, transform: 'translateY(0)' }],
    { duration: 220, easing: 'ease-out' },
  )
  bearNote.textContent = bearNotes[bearNoteIndex]
}

function formatFileSize(bytes) {
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function handleSubmission(event) {
  event.preventDefault()
  if (!submissionForm || !submissionStatus) return

  const form = new FormData(submissionForm)
  const pdf = form.get('pdf')
  const cover = form.get('cover')
  const requiredText = ['credit', 'email', 'title', 'description']
  const missingText = requiredText.find((name) => !String(form.get(name) || '').trim())
  const requiredPermissions = ['made-with-samizdat', 'rights', 'distribution', 'removal']
  const missingPermission = requiredPermissions.some((name) => form.get(name) !== 'on')

  if (missingText || missingPermission || !(pdf instanceof File) || !pdf.name || !(cover instanceof File) || !cover.name) {
    submissionStatus.textContent = 'Please complete the required fields, choose both files, and confirm all four permissions.'
    submissionStatus.className = 'submission-status is-error'
    return
  }

  const email = String(form.get('email')).trim()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    submissionStatus.textContent = 'Please enter a valid email address so we can reply about your submission.'
    submissionStatus.className = 'submission-status is-error'
    return
  }

  const isPdf = pdf.type === 'application/pdf' || /\.pdf$/i.test(pdf.name)
  const isCoverImage = ['image/png', 'image/jpeg', 'image/webp'].includes(cover.type) || /\.(png|jpe?g|webp)$/i.test(cover.name)
  if (!isPdf || !isCoverImage || pdf.size === 0 || cover.size === 0) {
    submissionStatus.textContent = 'Please choose a readable PDF and a PNG, JPEG, or WebP cover image.'
    submissionStatus.className = 'submission-status is-error'
    return
  }

  if (pdf.size > 25 * 1024 * 1024) {
    submissionStatus.textContent = `Your PDF is ${formatFileSize(pdf.size)}. Please keep it under 25 MB.`
    submissionStatus.className = 'submission-status is-error'
    return
  }

  if (cover.size > 5 * 1024 * 1024) {
    submissionStatus.textContent = `Your cover image is ${formatFileSize(cover.size)}. Please keep it under 5 MB.`
    submissionStatus.className = 'submission-status is-error'
    return
  }

  const subject = `Made with Samizdat submission: ${String(form.get('title')).trim()}`
  const body = [
    `Zine title: ${String(form.get('title')).trim()}`,
    `Preferred credit: ${String(form.get('credit')).trim()}`,
    `Email: ${email}`,
    `Location: ${String(form.get('location') || '').trim() || 'Not provided'}`,
    '',
    'Description:',
    String(form.get('description')).trim(),
    '',
    'Files to attach:',
    `- Print-ready PDF: ${pdf.name} (${formatFileSize(pdf.size)})`,
    `- Cover or preview image: ${cover.name} (${formatFileSize(cover.size)})`,
    '',
    'Permissions confirmed on the Samizdat submission form:',
    '- Made with Samizdat / authorized by maker',
    '- Rights to share text, images, and other material',
    '- Non-exclusive display and distribution permission',
    '- Removal request understood',
  ].join('\n')

  submissionStatus.textContent = 'Your email draft is ready. Attach the two selected files, then review and send it.'
  submissionStatus.className = 'submission-status is-ready'
  window.location.href = `mailto:${submissionEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

navToggle?.addEventListener('click', toggleNavigation)
navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNavigation))
document.querySelectorAll('[data-alpha-contact]').forEach((button) => button.addEventListener('click', () => openDialog(alphaDialog)))
document.querySelectorAll('[data-dialog-close]').forEach((button) => button.addEventListener('click', () => closeDialog(alphaDialog)))
document.querySelectorAll('[data-store-notice]').forEach((button) => button.addEventListener('click', () => openDialog(storeDialog)))
document.querySelectorAll('[data-store-close]').forEach((button) => button.addEventListener('click', () => closeDialog(storeDialog)))

bear?.addEventListener('click', advanceBearNote)
bear?.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    advanceBearNote()
  }
})
submissionForm?.addEventListener('submit', handleSubmission)

for (const dialog of [alphaDialog, storeDialog]) {
  dialog?.addEventListener('click', (event) => {
    if (event.target === dialog) closeDialog(dialog)
  })
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 1180) closeNavigation()
})
