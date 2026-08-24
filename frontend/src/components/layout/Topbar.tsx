interface TopbarProps {
  connected: boolean;
}

export function Topbar({ connected }: TopbarProps) {
  return (
    <header className="flex h-14 items-center justify-between border-b border-command-border bg-command-panel px-6">
      <div className="text-sm text-slate-400">
        سامانه پشتیبانی تصمیم‌گیری مدیریت بحران و لجستیک جزیره‌ای
      </div>
      <div className="flex items-center gap-2 text-xs">
        <span className={`h-2 w-2 rounded-full ${connected ? "bg-command-ok" : "bg-command-critical"}`} />
        {connected ? "اتصال بلادرنگ برقرار است" : "حالت آفلاین"}
      </div>
    </header>
  );
}
