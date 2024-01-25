// 2716. Minimize String Length

function minimizedStringLength(s: string): number {
    const st = new Set(s)
    return st.size;
}