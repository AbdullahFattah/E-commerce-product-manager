export default function Furniture(props) {
  return (
    <>
      <label className="mt-3">Height</label>
      <input
        type="number"
        id="height"
        value={props.height}
        onChange={(e) => props.handleChange(e)}
        name="height"
        className="form-control"
        placeholder="Height"
        required
      ></input>
      <label className="mt-1">Width</label>
      <input
        type="number"
        id="width"
        value={props.width}
        onChange={(e) => props.handleChange(e)}
        name="width"
        className="form-control"
        placeholder="Width"
        required
      ></input>
      <label className="mt-1">Length</label>
      <input
        type="number"
        id="length"
        value={props.length}
        onChange={(e) => props.handleChange(e)}
        name="length"
        className="form-control"
        placeholder="Length"
        required
      ></input>
      <p className="text-info">Please provide dimensions</p>
    </>
  );
}
