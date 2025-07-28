import {
  Box,
  Container,
  Typography,
  ImageList,
  ImageListItem,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import { useState } from "react";
import Certifications from "../Home/Certifications/Certifications";
import { useNavigate } from "react-router-dom";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const navigate = useNavigate();
  const categories = [
    { id: "all", label: "All" },
    { id: "before-after", label: "Before & After" },
    { id: "students", label: "Students at Work" },
    { id: "facilities", label: "Our Facilities" },
    { id: "courses", label: "Course Activities" },
    { id: "dogs", label: "Our Dogs" },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "1.jpeg",
      title: "Student grooming a Golden Retriever",
      category: "students",
      description: "One of our students practicing scissoring techniques",
    },
    {
      id: 2,
      src: "2.jpeg",
      title: "Before grooming - Poodle",
      category: "before-after",
      description: "Poodle before professional grooming",
    },
    {
      id: 3,
      src: "3.jpeg",
      title: "After grooming - Poodle",
      category: "before-after",
      description: "Same poodle after expert grooming",
    },
    {
      id: 4,
      src: "4.jpeg",
      title: "Modern grooming station",
      category: "facilities",
      description: "Our state-of-the-art grooming facilities",
    },
    {
      id: 5,
      src: "5.jpeg",
      title: "Hands-on learning",
      category: "courses",
      description: "Students learning nail trimming techniques",
    },
    {
      id: 6,
      src: "6.jpeg",
      title: "Friendly Labrador",
      category: "dogs",
      description: "One of our gentle training dogs",
    },
    {
      id: 7,
      src: "7.jpeg",
      title: "Clipping demonstration",
      category: "students",
      description: "Instructor demonstrating proper clipping technique",
    },
    {
      id: 8,
      src: "8.jpeg",
      title: "Training room overview",
      category: "facilities",
      description: "Our spacious training room with multiple stations",
    },
    {
      id: 9,
      src: "9.jpeg",
      title: "Before grooming - Spaniel",
      category: "before-after",
      description: "Cocker Spaniel before grooming session",
    },
    {
      id: 10,
      src: "10.jpeg",
      title: "After grooming - Spaniel",
      category: "before-after",
      description: "Beautifully groomed Cocker Spaniel",
    },
    // {
    //   id: 11,
    //   src: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147569900/images/fdeb21-de1b-3145-7ef5-337f3b4db551_Group.jpg",
    //   title: "Group learning session",
    //   category: "courses",
    //   description: "Students learning about different coat types",
    // },
    // {
    //   id: 12,
    //   src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThvII5xGLhJEIcUpiMP4c5xXVxIe0lOaTCjg&s",
    //   title: "Gentle Giant",
    //   category: "dogs",
    //   description: "Our calm and patient Great Dane",
    // },
    // {
    //   id: 13,
    //   src: "/placeholder.svg?height=300&width=400",
    //   title: "Professional tools",
    //   category: "facilities",
    //   description: "High-quality grooming tools and equipment",
    // },
    // {
    //   id: 14,
    //   src: "/placeholder.svg?height=300&width=400",
    //   title: "Student achievement",
    //   category: "students",
    //   description: "Proud student with their grooming work",
    // },
    // {
    //   id: 15,
    //   src: "/placeholder.svg?height=300&width=400",
    //   title: "Certificate presentation",
    //   category: "courses",
    //   description: "Students receiving their completion certificates",
    // },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory);

  return (
    <Box mt={5}>
      {/* Hero Section */}
      <Box
        sx={{
          mt: 5,
          background: "linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="overline"
            sx={{
              color: "#1976d2",
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            Our Work
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
            Gallery
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#666",
              maxWidth: 600,
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            Take a look at our students in action, our beautiful facilities, and
            the amazing transformations we achieve in our dog grooming courses.
          </Typography>
        </Container>
      </Box>

      {/* Filter Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              color: "#1976d2",
              fontWeight: 600,
              mb: 3,
            }}
          >
            Filter by Category
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
            sx={{ gap: 2 }}
          >
            {categories.map((category) => (
              <Chip
                key={category.id}
                label={category.label}
                onClick={() => setSelectedCategory(category.id)}
                variant={
                  selectedCategory === category.id ? "filled" : "outlined"
                }
                sx={{
                  backgroundColor:
                    selectedCategory === category.id
                      ? "#1976d2"
                      : "transparent",
                  color: selectedCategory === category.id ? "white" : "#1976d2",
                  borderColor: "#1976d2",
                  "&:hover": {
                    backgroundColor:
                      selectedCategory === category.id ? "#1565c0" : "#e3f2fd",
                  },
                  fontSize: "0.9rem",
                  height: 40,
                }}
              />
            ))}
          </Stack>
        </Box>

        {/* Gallery Grid */}
        <ImageList
          variant="standard" // Change this from "masonry" to "standard"
          cols={3}
          gap={35}
          sx={{
            "& .MuiImageListItem-root": {
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              },
            },
          }}
        >
          {filteredImages.map((image) => (
            <ImageListItem key={image.id}>
              <Box sx={{ position: "relative" }}>
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "200px", // Or set to "auto" if you want image height to adjust
                    objectFit: "contain", // ✅ Show full image without cropping
                    backgroundColor: "#f0f0f0", // Optional: background for letterbox/pillarbox effect
                    display: "block",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                    color: "white",
                    p: 2,
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                  className="image-overlay"
                >
                  <Typography variant="subtitle1" fontWeight={600}>
                    {image.title}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    {image.description}
                  </Typography>
                </Box>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>

        {/* Show overlay on hover for mobile */}
        <style jsx>{`
          .MuiImageListItem-root:hover .image-overlay {
            opacity: 1;
          }
        `}</style>

        {filteredImages.length === 0 && (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography variant="h6" color="#666">
              No images found for this category.
            </Typography>
          </Box>
        )}
      </Container>

      {/* Call to Action Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            sx={{
              color: "#1976d2",
              fontWeight: 700,
              mb: 3,
            }}
          >
            Ready to Start Your Journey?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#666",
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            Join our next course and become part of our success stories. Book
            your place today and start your professional dog grooming career.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate("/bookcourse")}
              sx={{
                backgroundColor: "#1976d2",
                py: 1.5,
                px: 4,
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
              }}
            >
              Book a Course
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate("/contact")}
              size="large"
              sx={{
                borderColor: "#1976d2",
                color: "#1976d2",
                py: 1.5,
                px: 4,
                textTransform: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                "&:hover": {
                  borderColor: "#1565c0",
                  color: "#1565c0",
                  backgroundColor: "rgba(25, 118, 210, 0.04)",
                },
              }}
            >
              Contact Us
            </Button>
          </Stack>
        </Container>
      </Box>

      <Certifications />
    </Box>
  );
}
