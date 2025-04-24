import Swal from "sweetalert2";

export default function useTanyaDosen() {
  const tanya = async () => {
    const { value: pertanyaan } = await Swal.fire({
      title: "Yuk Tanya Dosen..",
      input: "textarea",
      inputLabel: "Pertanyaan",
      inputPlaceholder: "Tulis pertanyaanmu di sini...",
      showCancelButton: true,
    });

    if (pertanyaan) {
      await Swal.fire("Berhasil!", "Pertanyaan berhasil dikirim.", "success");
      return pertanyaan;
    }
    return null;
  };

  return { tanya };
}
