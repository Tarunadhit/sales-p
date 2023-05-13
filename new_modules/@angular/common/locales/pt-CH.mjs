/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY.
const u = undefined;
function plural(val) {
    const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, '').length, e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, '$2')) || 0;
    if (i === Math.floor(i) && (i >= 0 && i <= 1))
        return 1;
    if (e === 0 && (!(i === 0) && (i % 1000000 === 0 && v === 0)) || !(e >= 0 && e <= 5))
        return 4;
    return 5;
}
export default ["pt-CH", [["a.m.", "p.m."], u, ["da manhã", "da tarde"]], [["a.m.", "p.m."], u, ["manhã", "tarde"]], [["D", "S", "T", "Q", "Q", "S", "S"], ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"], ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"], ["dom.", "seg.", "ter.", "qua.", "qui.", "sex.", "sáb."]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["jan.", "fev.", "mar.", "abr.", "mai.", "jun.", "jul.", "ago.", "set.", "out.", "nov.", "dez."], ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]], u, [["a.C.", "d.C."], u, ["antes de Cristo", "depois de Cristo"]], 1, [6, 0], ["dd/MM/yy", "dd/MM/y", "d 'de' MMMM 'de' y", "EEEE, d 'de' MMMM 'de' y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1}, {0}", u, "{1} 'às' {0}", u], [",", " ", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0%", "#,##0.00 ¤", "#E0"], "CHF", "CHF", "franco suíço", { "AUD": ["AU$", "$"], "BYN": [u, "р."], "JPY": ["JP¥", "¥"], "PHP": [u, "₱"], "PTE": ["​"], "RON": [u, "L"], "THB": ["฿"], "TWD": ["NT$"], "USD": ["US$", "$"] }, "ltr", plural];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHQtQ0guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9wdC1DSC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCwwQ0FBMEM7QUFDMUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0FBRXBCLFNBQVMsTUFBTSxDQUFDLEdBQVc7SUFDM0IsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEYsT0FBTyxDQUFDLENBQUM7SUFDYixPQUFPLENBQUMsQ0FBQztBQUNULENBQUM7QUFFRCxlQUFlLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsVUFBVSxFQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBQyxNQUFNLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxRQUFRLENBQUMsRUFBQyxDQUFDLFNBQVMsRUFBQyxlQUFlLEVBQUMsYUFBYSxFQUFDLGNBQWMsRUFBQyxjQUFjLEVBQUMsYUFBYSxFQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsU0FBUyxFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxVQUFVLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxFQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLGlCQUFpQixFQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxVQUFVLEVBQUMsU0FBUyxFQUFDLG9CQUFvQixFQUFDLDBCQUEwQixDQUFDLEVBQUMsQ0FBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxlQUFlLENBQUMsRUFBQyxDQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsRUFBQyxDQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsY0FBYyxFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRlkuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwodmFsOiBudW1iZXIpOiBudW1iZXIge1xuY29uc3QgbiA9IHZhbCwgaSA9IE1hdGguZmxvb3IoTWF0aC5hYnModmFsKSksIHYgPSB2YWwudG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLmxlbmd0aCwgZSA9IHBhcnNlSW50KHZhbC50b1N0cmluZygpLnJlcGxhY2UoL15bXmVdKihlKFstK10/XFxkKykpPy8sICckMicpKSB8fCAwO1xuXG5pZiAoaSA9PT0gTWF0aC5mbG9vcihpKSAmJiAoaSA+PSAwICYmIGkgPD0gMSkpXG4gICAgcmV0dXJuIDE7XG5pZiAoZSA9PT0gMCAmJiAoIShpID09PSAwKSAmJiAoaSAlIDEwMDAwMDAgPT09IDAgJiYgdiA9PT0gMCkpIHx8ICEoZSA+PSAwICYmIGUgPD0gNSkpXG4gICAgcmV0dXJuIDQ7XG5yZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1wicHQtQ0hcIixbW1wiYS5tLlwiLFwicC5tLlwiXSx1LFtcImRhIG1hbmjDo1wiLFwiZGEgdGFyZGVcIl1dLFtbXCJhLm0uXCIsXCJwLm0uXCJdLHUsW1wibWFuaMOjXCIsXCJ0YXJkZVwiXV0sW1tcIkRcIixcIlNcIixcIlRcIixcIlFcIixcIlFcIixcIlNcIixcIlNcIl0sW1wiZG9taW5nb1wiLFwic2VndW5kYVwiLFwidGVyw6dhXCIsXCJxdWFydGFcIixcInF1aW50YVwiLFwic2V4dGFcIixcInPDoWJhZG9cIl0sW1wiZG9taW5nb1wiLFwic2VndW5kYS1mZWlyYVwiLFwidGVyw6dhLWZlaXJhXCIsXCJxdWFydGEtZmVpcmFcIixcInF1aW50YS1mZWlyYVwiLFwic2V4dGEtZmVpcmFcIixcInPDoWJhZG9cIl0sW1wiZG9tLlwiLFwic2VnLlwiLFwidGVyLlwiLFwicXVhLlwiLFwicXVpLlwiLFwic2V4LlwiLFwic8OhYi5cIl1dLHUsW1tcIkpcIixcIkZcIixcIk1cIixcIkFcIixcIk1cIixcIkpcIixcIkpcIixcIkFcIixcIlNcIixcIk9cIixcIk5cIixcIkRcIl0sW1wiamFuLlwiLFwiZmV2LlwiLFwibWFyLlwiLFwiYWJyLlwiLFwibWFpLlwiLFwianVuLlwiLFwianVsLlwiLFwiYWdvLlwiLFwic2V0LlwiLFwib3V0LlwiLFwibm92LlwiLFwiZGV6LlwiXSxbXCJqYW5laXJvXCIsXCJmZXZlcmVpcm9cIixcIm1hcsOnb1wiLFwiYWJyaWxcIixcIm1haW9cIixcImp1bmhvXCIsXCJqdWxob1wiLFwiYWdvc3RvXCIsXCJzZXRlbWJyb1wiLFwib3V0dWJyb1wiLFwibm92ZW1icm9cIixcImRlemVtYnJvXCJdXSx1LFtbXCJhLkMuXCIsXCJkLkMuXCJdLHUsW1wiYW50ZXMgZGUgQ3Jpc3RvXCIsXCJkZXBvaXMgZGUgQ3Jpc3RvXCJdXSwxLFs2LDBdLFtcImRkL01NL3l5XCIsXCJkZC9NTS95XCIsXCJkICdkZScgTU1NTSAnZGUnIHlcIixcIkVFRUUsIGQgJ2RlJyBNTU1NICdkZScgeVwiXSxbXCJISDptbVwiLFwiSEg6bW06c3NcIixcIkhIOm1tOnNzIHpcIixcIkhIOm1tOnNzIHp6enpcIl0sW1wiezF9LCB7MH1cIix1LFwiezF9ICfDoHMnIHswfVwiLHVdLFtcIixcIixcIsKgXCIsXCI7XCIsXCIlXCIsXCIrXCIsXCItXCIsXCJFXCIsXCLDl1wiLFwi4oCwXCIsXCLiiJ5cIixcIk5hTlwiLFwiOlwiXSxbXCIjLCMjMC4jIyNcIixcIiMsIyMwJVwiLFwiIywjIzAuMDDCoMKkXCIsXCIjRTBcIl0sXCJDSEZcIixcIkNIRlwiLFwiZnJhbmNvIHN1w63Dp29cIix7XCJBVURcIjpbXCJBVSRcIixcIiRcIl0sXCJCWU5cIjpbdSxcItGALlwiXSxcIkpQWVwiOltcIkpQwqVcIixcIsKlXCJdLFwiUEhQXCI6W3UsXCLigrFcIl0sXCJQVEVcIjpbXCLigItcIl0sXCJST05cIjpbdSxcIkxcIl0sXCJUSEJcIjpbXCLguL9cIl0sXCJUV0RcIjpbXCJOVCRcIl0sXCJVU0RcIjpbXCJVUyRcIixcIiRcIl19LFwibHRyXCIsIHBsdXJhbF07XG4iXX0=