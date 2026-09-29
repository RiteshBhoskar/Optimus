'use client'

import { useState } from 'react'
import {
  Activity,
  ArrowDownToLine,
  ArrowUpRight,
  Box,
  ChevronDown,
  CircleHelp,
  Clock3,
  Code2,
  CreditCard,
  FolderKanban,
  Gauge,
  GitBranch,
  Layers3,
  LayoutDashboard,
  LifeBuoy,
  Menu,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  X,
  Zap,
} from 'lucide-react'

const navItems = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Sandboxes', icon: Box },
  { label: 'Templates', icon: Layers3 },
  { label: 'Usage', icon: Gauge },
]

const projects = [
  { name: 'browser-agent', status: 'Running', branch: 'main', updated: '2m ago', color: 'bg-[#b7f34a]' },
  { name: 'data-analysis', status: 'Stopped', branch: 'develop', updated: '1h ago', color: 'bg-[#f6a7df]' },
  { name: 'code-interpreter', status: 'Running', branch: 'main', updated: '3h ago', color: 'bg-[#8fd8ff]' },
  { name: 'pdf-extractor', status: 'Stopped', branch: 'feature/pdf', updated: 'Yesterday', color: 'bg-[#ffc76e]' },
]

export default function Home() {
  const [active, setActive] = useState('Overview')
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#0a0a09] text-[#f2f0e9] selection:bg-[#b7f34a] selection:text-black">
      <div className="flex min-h-screen">
        <aside className={`fixed inset-y-0 left-0 z-30 flex w-[248px] flex-col border-r border-white/[0.09] bg-[#0c0c0b] px-4 py-5 transition-transform lg:static lg:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="mb-10 flex items-center justify-between px-2">
            <div className="flex items-center gap-2.5">
              <div className="grid h-8 w-8 place-items-center rounded-[9px] bg-[#b7f34a] text-black"><Sparkles size={17} strokeWidth={2.5} /></div>
              <span className="font-mono text-[17px] font-bold tracking-[-0.08em]">e2b</span>
            </div>
            <button onClick={() => setMobileOpen(false)} className="text-white/45 lg:hidden" aria-label="Close navigation"><X size={18} /></button>
          </div>

          <div className="mb-8 px-1">
            <button className="flex w-full items-center justify-between rounded-lg border border-white/[0.12] bg-white/[0.04] px-3 py-2.5 text-left transition hover:bg-white/[0.08]">
              <span className="flex items-center gap-2.5 text-[13px] font-medium"><div className="grid h-6 w-6 place-items-center rounded-md bg-[#f6a7df] text-[11px] font-bold text-black">A</div> Acme Inc.</span>
              <ChevronDown size={15} className="text-white/45" />
            </button>
          </div>

          <nav className="space-y-1">
            <p className="mb-3 px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">Workspace</p>
            {navItems.map(({ label, icon: Icon }) => <button key={label} onClick={() => { setActive(label); setMobileOpen(false) }} className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] transition ${active === label ? 'bg-white/[0.1] text-white' : 'text-white/48 hover:bg-white/[0.05] hover:text-white'}`}><Icon size={16} strokeWidth={1.7} />{label}{label === 'Sandboxes' && <span className="ml-auto rounded-full bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-white/50">12</span>}</button>)}
          </nav>
          <nav className="mt-8 space-y-1">
            <p className="mb-3 px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">Manage</p>
            {[['Team', ShieldCheck], ['Billing', CreditCard], ['Settings', Settings]].map(([label, Icon]) => <button key={label as string} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] text-white/48 transition hover:bg-white/[0.05] hover:text-white"><Icon size={16} strokeWidth={1.7} />{label as string}</button>)}
          </nav>
          <div className="mt-auto rounded-xl border border-white/[0.1] bg-[#121210] p-3.5">
            <div className="mb-2 flex items-center gap-2 text-[12px] font-medium"><Zap size={14} className="text-[#b7f34a]" /> Pro plan</div>
            <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[64%] rounded-full bg-[#b7f34a]" /></div>
            <p className="font-mono text-[10px] text-white/40">64 / 100 compute hours</p>
            <button className="mt-3 text-[11px] font-medium text-[#b7f34a] hover:underline">Manage plan <ArrowUpRight size={11} className="inline" /></button>
          </div>
        </aside>

        {mobileOpen && <button className="fixed inset-0 z-20 bg-black/60 lg:hidden" onClick={() => setMobileOpen(false)} aria-label="Close menu overlay" />}

        <section className="min-w-0 flex-1">
          <header className="flex h-[68px] items-center justify-between border-b border-white/[0.09] px-5 sm:px-8">
            <button onClick={() => setMobileOpen(true)} className="text-white/60 lg:hidden" aria-label="Open navigation"><Menu size={20} /></button>
            <div className="hidden items-center gap-2 text-[12px] text-white/42 sm:flex"><span className="text-white/65">Acme Inc.</span><span>/</span><span>{active}</span></div>
            <div className="ml-auto flex items-center gap-4"><button className="hidden text-white/45 transition hover:text-white sm:block" aria-label="Search"><Search size={17} /></button><button className="hidden text-white/45 transition hover:text-white sm:block" aria-label="Help"><CircleHelp size={17} /></button><div className="h-7 w-px bg-white/10" /><button className="grid h-8 w-8 place-items-center rounded-full bg-[#f6a7df] text-[11px] font-bold text-black">AR</button></div>
          </header>

          <div className="mx-auto max-w-[1300px] px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#b7f34a]">Tuesday, September 29, 2026</p><h1 className="font-display text-[42px] leading-none tracking-[-0.05em] sm:text-[54px]">Good morning, Alex<span className="text-[#b7f34a]">.</span></h1><p className="mt-3 text-[13px] text-white/42">Here&apos;s what&apos;s happening across your sandboxes.</p></div><button className="flex w-fit items-center gap-2 rounded-lg bg-[#b7f34a] px-4 py-2.5 text-[12px] font-semibold text-black transition hover:bg-[#c9ff70]"><Plus size={15} /> New sandbox</button></div>

            <div className="mb-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {[['Active sandboxes', '08', '+2 this week', Activity], ['Compute hours', '64.2', 'of 100 included', Clock3], ['Avg. startup time', '1.8s', '−12% vs last month', Zap], ['API requests', '24.8k', '+18.4% this month', ArrowUpRight]].map(([label, value, detail, Icon]) => <div key={label as string} className="group rounded-xl border border-white/[0.1] bg-white/[0.025] p-5 transition hover:border-white/20"><div className="mb-7 flex items-center justify-between"><span className="text-[12px] text-white/45">{label as string}</span><Icon size={15} className="text-white/30 transition group-hover:text-[#b7f34a]" /></div><div className="flex items-end justify-between"><span className="font-mono text-[29px] tracking-[-0.06em]">{value as string}</span><span className="font-mono text-[10px] text-[#b7f34a]">{detail as string}</span></div></div>)}
            </div>

            <div className="grid gap-4 xl:grid-cols-[1.45fr_1fr]">
              <div className="rounded-xl border border-white/[0.1] bg-white/[0.025] p-5 sm:p-6"><div className="mb-8 flex items-start justify-between"><div><h2 className="text-[14px] font-medium">Compute usage</h2><p className="mt-1 text-[11px] text-white/38">Your usage over the last 30 days</p></div><button className="flex items-center gap-1 rounded-md border border-white/10 px-2.5 py-1.5 font-mono text-[10px] text-white/55">Last 30 days <ChevronDown size={12} /></button></div><div className="relative h-[195px] border-b border-l border-white/10"><div className="absolute inset-x-0 top-0 border-t border-dashed border-white/[0.07]" /><div className="absolute inset-x-0 top-1/3 border-t border-dashed border-white/[0.07]" /><div className="absolute inset-x-0 top-2/3 border-t border-dashed border-white/[0.07]" /><svg viewBox="0 0 700 180" preserveAspectRatio="none" className="absolute inset-0 h-full w-full overflow-visible"><defs><linearGradient id="usage" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#b7f34a" stopOpacity=".28" /><stop offset="1" stopColor="#b7f34a" stopOpacity="0" /></linearGradient></defs><path d="M0,145 C45,137 50,110 93,122 S145,150 185,110 S235,76 275,91 S320,120 360,76 S410,56 455,72 S500,45 542,54 S600,40 650,18 S680,32 700,5 V180 H0Z" fill="url(#usage)" /><path d="M0,145 C45,137 50,110 93,122 S145,150 185,110 S235,76 275,91 S320,120 360,76 S410,56 455,72 S500,45 542,54 S600,40 650,18 S680,32 700,5" fill="none" stroke="#b7f34a" strokeWidth="2" vectorEffect="non-scaling-stroke" /></svg><div className="absolute -bottom-6 inset-x-0 flex justify-between font-mono text-[9px] text-white/30"><span>Sep 01</span><span>Sep 08</span><span>Sep 15</span><span>Sep 22</span><span>Sep 29</span></div></div></div>
              <div className="rounded-xl border border-white/[0.1] bg-white/[0.025] p-5 sm:p-6"><div className="mb-6 flex items-start justify-between"><div><h2 className="text-[14px] font-medium">Recent activity</h2><p className="mt-1 text-[11px] text-white/38">Latest events in your workspace</p></div><button className="text-[11px] text-[#b7f34a] hover:underline">View all</button></div><div className="space-y-5">{[['Sandbox created', 'browser-agent', '2 min ago', Plus], ['Template deployed', 'code-interpreter', '3 hours ago', ArrowUpRight], ['Sandbox stopped', 'data-analysis', '1 hour ago', Activity], ['API key rotated', 'Workspace settings', 'Yesterday', ShieldCheck]].map(([event, detail, time, Icon]) => <div key={event as string} className="flex items-start gap-3"><div className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-white/[0.07] text-white/50"><Icon size={13} /></div><div className="min-w-0 flex-1"><p className="text-[12px] text-white/75">{event as string}</p><p className="mt-0.5 truncate font-mono text-[10px] text-white/35">{detail as string}</p></div><span className="shrink-0 font-mono text-[9px] text-white/30">{time as string}</span></div>)}</div></div>
            </div>

            <div className="mt-10 rounded-xl border border-white/[0.1] bg-white/[0.025]"><div className="flex items-center justify-between border-b border-white/[0.09] px-5 py-4 sm:px-6"><div><h2 className="text-[14px] font-medium">Your sandboxes</h2><p className="mt-1 text-[11px] text-white/38">Manage and monitor your environments</p></div><button className="flex items-center gap-1.5 text-[11px] text-white/50 transition hover:text-white"><FolderKanban size={14} /> View all</button></div><div className="hidden grid-cols-[1.4fr_1fr_1fr_1fr_36px] gap-4 px-6 py-3 font-mono text-[9px] uppercase tracking-wider text-white/30 sm:grid"><span>Name</span><span>Status</span><span>Branch</span><span>Last updated</span><span /></div>{projects.map((project) => <div key={project.name} className="grid grid-cols-1 gap-3 border-t border-white/[0.07] px-5 py-4 transition hover:bg-white/[0.03] sm:grid-cols-[1.4fr_1fr_1fr_1fr_36px] sm:items-center sm:gap-4 sm:px-6"><div className="flex items-center gap-3"><div className={`h-2 w-2 rounded-full ${project.color} ${project.status === 'Running' ? 'shadow-[0_0_10px_currentColor]' : 'opacity-40'}`} /><span className="font-mono text-[12px] text-white/80">{project.name}</span></div><div><span className={`inline-flex items-center gap-1.5 text-[11px] ${project.status === 'Running' ? 'text-[#b7f34a]' : 'text-white/35'}`}><span className={`h-1.5 w-1.5 rounded-full ${project.status === 'Running' ? 'bg-[#b7f34a]' : 'bg-white/25'}`} />{project.status}</span></div><div className="flex items-center gap-1.5 font-mono text-[11px] text-white/40"><GitBranch size={12} />{project.branch}</div><span className="font-mono text-[10px] text-white/35">{project.updated}</span><button className="hidden text-white/30 hover:text-white sm:block" aria-label={`More options for ${project.name}`}><MoreHorizontal size={16} /></button></div>)}</div>

            <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/[0.09] py-6 text-[11px] text-white/30 sm:flex-row"><div className="flex items-center gap-4"><span className="flex items-center gap-1.5"><TerminalSquare size={13} /> CLI v1.2.4</span><span className="flex items-center gap-1.5"><Code2 size={13} /> API status <span className="text-[#b7f34a]">Operational</span></span></div><div className="flex items-center gap-4"><span className="flex items-center gap-1.5"><LifeBuoy size={13} /> Docs</span><span>© 2026 e2b</span></div></div>
          </div>
        </section>
      </div>
    </main>
  )
}
