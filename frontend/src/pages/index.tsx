import yayJpg from '../assets/yay.jpg';

export default function HomePage() {
  return (
    <div>
      <h2>Yay! Welcome to our soon-to-be awesome event site!</h2>
      <p>
        <img src={yayJpg} width="388"  alt={'yay'}/>
      </p>
    </div>
  );
}
