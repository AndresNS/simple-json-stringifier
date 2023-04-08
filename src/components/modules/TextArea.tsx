// import { ConvertMode } from "../../types/global.d";

// interface Props {
//   convertMode: ConvertMode;
//   title: string;
//   content: string;
//   setContent: React.Dispatch<React.SetStateAction<string>>;
//   type: number;
//   handleChange: () => void;
// }

// const TextArea = ({
//   convertMode,
//   title,
//   content,
//   setContent,
//   type,
//   handleChange,
// }: Props) => {
//   const handleTextAreaChange = (
//     event: React.ChangeEvent<HTMLTextAreaElement>
//   ): void => {
//     setContent(event.target.value);
//   };

//   return (
//     <>
//       <h3 className="mb-2">{title}</h3>
//       <textarea
//         className="w-full rounded p-2 text-black"
//         rows={20}
//         spellCheck={false}
//         onChange={handleTextAreaChange}
//         value={content}
//         // readOnly={
//         //   (convertMode === ConvertMode.JSONtoString && type === 1) ||
//         //   (convertMode === ConvertMode.StringtoJSON && type === 0)
//         // }
//       />
//     </>
//   );
// };

// export default TextArea;
