export default function FormChat() {
  return (
    <form
      data-loading="false"
      className="max-w-md w-full mx-auto flex-1 sticky bottom-8 flex flex-col gap-2 bg-white"
    >
      <div className="form-control">
        <textarea
          name="message"
          placeholder="What do you want to know?"
          className="w-full p-2 border rounded resize-none"
        ></textarea>
      </div>
      <div className="flex justify-center mt-2">
        <button type="submit" className="button button--default">
          Send
        </button>
      </div>
    </form>
  )
}