import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
      validate: {
        validator: function (value: {
          split: (arg0: RegExp) => { (): any; new (): any; length: any };
        }) {
          const wordCount = value.split(/\s+/).length;
          const wordLimit = 50;
          return wordCount <= wordLimit;
        },
        message: "Exceeded the maximum word count for the content.",
      },
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
  },
  { timestamps: true }
);

const Comment =
  mongoose.models.Comment || mongoose.model("Comment", commentSchema);

export default Comment;
