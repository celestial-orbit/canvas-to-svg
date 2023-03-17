export default function arcTo(ctx) {
    let p0=[0,300];
    let p1=[250,20];
    let p2=[500,300];
    let p3=[250,200];
    let r = 100;
    ctx.beginPath();

    ctx.moveTo(p0[0],p0[1]);               // P0
    ctx.arcTo(p1[0],p1[1], p2[0],p2[1], r); // P1, P2 and the radius
    ctx.lineTo(p2[0],p2[1]);
    ctx.moveTo(p0[0],p0[1]);
    ctx.lineTo(p1[0],p1[1], p2[0],p2[1]);
    ctx.lineTo(p2[0],p2[1]);

    ctx.moveTo(p0[0],p0[1]);               // P0
    ctx.arcTo(p3[0],p3[1], p2[0],p2[1], r); // P3, P2 and the radius
    ctx.lineTo(p2[0],p2[1]);
    ctx.moveTo(p0[0],p0[1]);
    ctx.lineTo(p3[0],p3[1], p2[0],p2[1]);
    ctx.lineTo(p2[0],p2[1]);

    ctx.stroke();
};