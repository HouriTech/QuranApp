export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <form class="form" id="form" action="#">
        <div class="input-box">
          <input
            type="text"
            class="text-input"
            name="name"
            placeholder="Name"
          />
        </div>
        <div class="input-box">
          <input
            type="email"
            class="text-input"
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div class="input-box">
          <input
            type="subject"
            class="text-input"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
        </div>
        <div class="input-box">
          <textarea
            name="text"
            class="message"
            placeholder="Message..."
          ></textarea>
        </div>
        <div class="input-box">
          <input type="submit" class="submit-btn" id="submit" value="submit" />
        </div>
      </form>
    </>
  );
}
