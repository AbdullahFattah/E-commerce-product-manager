export default function Dvd(props) {
  return (
    <>
      <label className="mt-3">Size</label>
      <input
        type="number"
        id="size"
        value={props.size}
        onChange={(e) => props.handleChange(e)}
        name="size"
        className="form-control"
        placeholder="DVD size (MB)"
        required
      ></input>
      <p className="text-info">Please provide size</p>
    </>
  );
}
