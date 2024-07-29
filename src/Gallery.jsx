import Profile from "./Profile";
import Avatar from "./Avatar";

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      <Avatar data={{psrc:"https://picsum.photos/id/351/200/300", text:"image1"}} cname="pic"/>;
      <Avatar data={{psrc:"https://picsum.photos/id/361/200/300", text:"image2"}} cname="pic"/>;
      

    </section>
  )
}
