"use client";
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Chip,
  Button,
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Fade,
} from "@mui/material";
import { useEffect, useState } from "react";
import Person from "@mui/icons-material/Person";
import CalendarToday from "@mui/icons-material/CalendarToday";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Close from "@mui/icons-material/Close";
import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const blogPosts = [
    {
      id: 1,
      title: "Ethel the English Springer Spaniel x Joules",
      excerpt:
        "Meet Ethel, the charming English Springer Spaniel, beautifully styled by our talented groomers for a special collaboration with Joules...",
      body: "From prepping her with premium grooming products to capturing her in action on set, our team ensured every detail was picture-perfect. This behind-the-scenes look highlights not just Ethel’s charm, but the skill and care that go into every professional grooming session. Each step of the grooming process was carefully tailored to bring out her natural beauty and personality, using techniques that enhance comfort and style simultaneously. Our experts paid close attention to every brushstroke and trim, ensuring that Ethel not only looked stunning but felt relaxed throughout the session. Beyond the aesthetics, this shoot reflects the dedication and passion of our grooming team. Their commitment to quality shines through in every frame, showcasing how professional grooming is an art form that combines precision, patience, and a genuine love for the animals they care for.",
      category: "Grooming Tips",
      author: "Team bernie",
      createdDate: "2025-07-24T10:30:00Z",
      readingTime: 3,
      imageUrl: "1.jpeg",
      images: [
        "1.jpeg",
        "2.jpeg",
        "3.jpeg",
        "4.jpeg",
        "5.jpeg",
        "6.jpeg",
        "7.jpeg",
        "8.jpeg",
        "9.jpeg",
        "10.jpeg",
      ],
    },
  ];

  // Cycle slideshow every 3 seconds

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <Box mt={5}>
      {/* Hero */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="overline"
            sx={{ color: "#1976d2", fontWeight: 600 }}
          >
            Latest Updates
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "#1976d2",
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            Blog
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#666", maxWidth: 600, mx: "auto", lineHeight: 1.6 }}
          >
            Stay updated with the latest grooming tips, success stories, and
            expert insights from our grooming professionals.
          </Typography>
        </Container>
      </Box>

      {/* Blog Cards */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Stack spacing={6}>
          {blogPosts.map((post) => (
            <Paper
              key={post.id}
              elevation={3}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                },
              }}
            >
              <Stack direction={{ xs: "column", sm: "row" }}>
                <Box
                  sx={{
                    width: { xs: "100%", sm: 250 },
                    height: { xs: 140, sm: 160 },
                    backgroundImage: `url(${post.imageUrl})`,
                    backgroundSize: "contain", // Show full image inside container
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    borderRadius: 1,
                    bgcolor: "#f0f0f0", // optional: show background behind image
                  }}
                />

                <Box sx={{ flex: 1, p: 3 }}>
                  <Chip
                    label={post.category}
                    size="small"
                    variant="outlined"
                    sx={{
                      borderColor: "#1976d2",
                      color: "#1976d2",
                      fontSize: "0.75rem",
                      mb: 1,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ color: "#1976d2", fontWeight: 600, mb: 1 }}
                  >
                    {post.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
                    {post.excerpt}
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Stack direction="row" spacing={2}>
                      <Avatar
                        sx={{ width: 28, height: 28, bgcolor: "#1976d2" }}
                      >
                        <Person sx={{ fontSize: 16 }} />
                      </Avatar>
                      <Box>
                        <Typography variant="caption" fontWeight={600}>
                          {post.author}
                        </Typography>
                        <Stack direction="row" spacing={1}>
                          <CalendarToday sx={{ fontSize: 12, color: "#666" }} />
                          <Typography variant="caption" color="#666">
                            {formatDate(post.createdDate)} • {post.readingTime}{" "}
                            min
                          </Typography>
                        </Stack>
                      </Box>
                    </Stack>
                    <Button
                      variant="text"
                      endIcon={<ArrowForward />}
                      sx={{ color: "#1976d2", textTransform: "none" }}
                      onClick={() => {
                        setSelectedPost(post);
                        setSlideIndex(0);
                      }}
                    >
                      Read More
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Container>

      {/* Modal */}
      <Dialog
        open={!!selectedPost}
        onClose={() => setSelectedPost(null)}
        fullWidth
        maxWidth="md"
        TransitionComponent={Fade}
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">{selectedPost?.title}</Typography>
          <IconButton onClick={() => setSelectedPost(null)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            By {selectedPost?.author} • {formatDate(selectedPost?.createdDate)}{" "}
            • {selectedPost?.readingTime} min read
          </Typography>

          <Typography
            variant="body1"
            sx={{ my: 2, color: "#444", lineHeight: 1.7 }}
          >
            {selectedPost?.body}
          </Typography>

          {/* Slideshow for multiple images */}
          {selectedPost?.images?.length > 1 && (
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: 400,
                overflow: "hidden",
                borderRadius: 2,
                mt: 2,
              }}
            >
              {/* Slider container */}
              <Box
                sx={{
                  display: "flex",
                  height: "100%",
                  width: `${selectedPost.images.length * 100}%`,
                  transition: "transform 0.6s ease-in-out",
                  transform: `translateX(-${
                    slideIndex * (100 / selectedPost.images.length)
                  }%)`,
                }}
              >
                {selectedPost.images.map((img, i) => (
                  <Box
                    key={i}
                    component="img"
                    src={img}
                    alt={`Slide ${i + 1}`}
                    sx={{
                      width: `${100 / selectedPost.images.length}%`,
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: 2,
                      flexShrink: 0,
                    }}
                  />
                ))}
              </Box>

              {/* Prev Button */}
              <IconButton
                onClick={() =>
                  setSlideIndex((prev) =>
                    prev === 0 ? selectedPost.images.length - 1 : prev - 1
                  )
                }
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: 8,
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(255,255,255,0.7)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                  zIndex: 10,
                }}
                aria-label="Previous Slide"
              >
                <ArrowBackIosNew />
              </IconButton>

              {/* Next Button */}
              <IconButton
                onClick={() =>
                  setSlideIndex(
                    (prev) => (prev + 1) % selectedPost.images.length
                  )
                }
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: 8,
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(255,255,255,0.7)",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.9)" },
                  zIndex: 10,
                }}
                aria-label="Next Slide"
              >
                <ArrowForwardIos />
              </IconButton>
            </Box>
          )}

          {/* Single image */}
          {selectedPost?.images?.length === 1 && (
            <Box
              component="img"
              src={selectedPost.images[0]}
              alt="Single"
              sx={{
                width: "100%",
                height: 400, // same fixed height as slideshow container
                objectFit: "cover",
                borderRadius: 2,
                mt: 2,
                display: "block",
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
