import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";

const Page = async () =>{
    
    const {getUser} = getKindeServerSession();

    const user = await getUser();

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

    if(!user || user.email!==ADMIN_EMAIL) {
        return notFound();
    }

    const orders = await db.order.findMany({
        where: {
            isPaid: true,
            createdAt: {
                gte: new Date(new Date().setDate(new Date().getDate()-7))
            }
        },
        orderBy: {
            createdAt: "desc",
        },
        include: {
            user: true,
            shippingAddress: true,
        },
    });

    return (
    <div className="flex min-h-screen w-full bg-muted/40">

    </div>
    )
}

export default Page;