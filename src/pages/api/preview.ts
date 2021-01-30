import { NextApiHandler } from 'next';
import { getPostsFromCMSById } from '../../utils/posts';

const preview: NextApiHandler = async (req, res) => {
  if (req.query.secret !== process.env.SECRET_KEY || !req.query.id || !req.query.draftKey) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const post = await getPostsFromCMSById(req.query.id as string, req.query.draftKey as string);

  if (!post) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  res.setPreviewData({
    id: req.query.id,
    draftKey: req.query.draftKey,
  });
  res.writeHead(307, { Location: `/posts/${req.query.id}` });
  res.end('Preview mode enabled');
};

export default preview;
